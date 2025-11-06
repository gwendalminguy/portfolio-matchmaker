import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function ScoreboardTree({ matches = [], totalRounds = 1, highlightedMatch }) {
  const { t } = useTranslation();

  // CARD DIMENSIONS & SPACING
  const CARD_HEIGHT = 100;
  const CARD_WIDTH = 200;
  const COLUMN_SPACING = 100;
  const ROW_SPACING = 0;
  const LINE_WIDTH = 2;

  // Gathering Rounds
  const roundsMap = useMemo(() => {
    const m = {};
    (matches || []).forEach((match) => {
      if (!m[match.round_no]) {
        m[match.round_no] = [];
      }
      m[match.round_no].push(match);
    });
    return m;
  }, [matches]);

  const allRounds = useMemo(
    () => Array.from({ length: totalRounds }, (_, i) => roundsMap[i + 1] || []),
    [roundsMap, totalRounds]
  );

  // Re-ordering rounds so that the order of round N-1 follows the order imposed by round N
  const orderedRounds = useMemo(() => {
    const copy = allRounds.map((round) => [...round]);
    for (let round = copy.length - 1; round > 0; round--) {
      const currentRound = copy[round];
      const prevRound = copy[round - 1];
      if (!currentRound || !prevRound) continue;

      const newPrev = [];
      currentRound.forEach((match) => {
        const a_id = match.teamA_from?.id ?? match.teamA_from ?? null;
        const b_id = match.teamB_from?.id ?? match.teamB_from ?? null;

        if (a_id) {
          const parentA = prevRound.find((m) => m.id === a_id);
          if (parentA && !newPrev.includes(parentA)) newPrev.push(parentA);
        }
        if (b_id) {
          const parentB = prevRound.find((m) => m.id === b_id);
          if (parentB && !newPrev.includes(parentB)) newPrev.push(parentB);
        }
      });

      // Adding remaining ones at the end
      prevRound.forEach((match) => {
        if (!newPrev.includes(match)) newPrev.push(match);
      });

      copy[round - 1] = newPrev;
    }
    return copy;
  }, [allRounds]);

  const firstRoundMatches = orderedRounds[0]?.length || 0;
  const rows = Math.max(1, firstRoundMatches * 2) - 1;

  // Computing the row for the first round
  const getFirstRoundRow = (idx) => idx * 2 + 1;

  // Storing position for each match
  const matchPositions = {};

  // Generate complete rounds with placeholders if needed
  const filledRounds = useMemo(() => {
    return orderedRounds.map((round, i) => {
      const expectedMatches = Math.pow(2, totalRounds - (i + 1));
      const filled = [...round];

      while (filled.length < expectedMatches) {
        filled.push({
          id: `placeholder-${i}-${filled.length}`,
          round_no: i + 1,
          teamA: null,
          teamB: null,
          teamA_score: null,
          teamB_score: null,
          winner: null,
          status: "",
          placeholder: true,
        });
      }

      return filled;
    });
  }, [orderedRounds, totalRounds]);

  return (
    <div className="overflow-x-auto p-4">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${totalRounds}, ${CARD_WIDTH}px)`,
          gridTemplateRows: `repeat(${rows}, ${CARD_HEIGHT}px)`,
          alignItems: "center",
          columnGap: `${COLUMN_SPACING}px`,
          rowGap: `${ROW_SPACING}px`,
        }}
      >
        {filledRounds.map((round, rIndex) => {
          if (!round || round.length === 0) return null;

          return round.map((match, mIndex) => {
            // Computing starting line
            let gridRowStart;
            if (rIndex === 0) {
              gridRowStart = getFirstRoundRow(mIndex);
            } else {
              const parentA_id = match.teamA_from?.id ?? match.teamA_from ?? null;
              const parentB_id = match.teamB_from?.id ?? match.teamB_from ?? null;
              const parentAPosition = parentA_id ? matchPositions[parentA_id] : null;
              const parentBPosition = parentB_id ? matchPositions[parentB_id] : null;

              if (parentAPosition != null && parentBPosition != null) {
                gridRowStart = Math.round((parentAPosition + parentBPosition) / 2);
              } else {
                gridRowStart = getFirstRoundRow(mIndex) * Math.pow(2, rIndex);
              }
            }

            // Mesmerizing position for children
            matchPositions[match.id] = gridRowStart;

            // Getting Vertical Line Height
            const getConnectorHeight = (rIndex) => CARD_HEIGHT / 2 + (Math.pow(2, rIndex) - 1) * (CARD_HEIGHT + ROW_SPACING) + ROW_SPACING;

            // Horizontal Connector Style
            const horizontalConnectorStyle = {
              position: "absolute",
              left: `${CARD_WIDTH}px`,
              width: `${CARD_WIDTH / 2 + COLUMN_SPACING}px`,
              height: `${LINE_WIDTH}px`,
            };

            // Vertical Connector Style
            const verticalConnectorStyle = {
              position: "absolute",
              left: `${CARD_WIDTH * 1.5 + COLUMN_SPACING}px`,
              width: `${LINE_WIDTH}px`,
              height: `${getConnectorHeight(rIndex) + LINE_WIDTH / 2}px`,
            };

            if (mIndex % 2 === 0) {
              verticalConnectorStyle.top = `${CARD_HEIGHT / 2 - LINE_WIDTH / 2}px`;
            } else {
              verticalConnectorStyle.bottom = `${CARD_HEIGHT / 2 - LINE_WIDTH / 2}px`;
            }

            return (
              <div key={match.id} className="relative flex items-center justify-start" style={{gridColumnStart: rIndex + 1, gridRowStart}}>

                {/* Match Card */}
                <div className={`relative flex flex-col justify-between bg-base-100 border border-base-300 rounded-xl px-2 py-2 z-50 shadow-md text-sm text-center transition-all duration-200 hover:scale-[1.025] hover:shadow-lg ${highlightedMatch === match.id ? "scale-[1.05] ring-2 ring-primary" : ""}`} style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}>

                  {/* Header (Round & Status) */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 px-1 mb-1 uppercase tracking-wide flex-none">
                    <span>{t('round')} #{match.round_no}</span>
                    <span>{t(match.status.toLowerCase())}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-grow">

                    {/* Team A */}
                    <div className={`flex items-center justify-between px-2 rounded-md transition-colors ${match.status !== "FINISHED" ? "bg-gray-500/10" : !match.winner ? "bg-warning/10 text-warning" : match.winner.id === match.teamA.id ? "bg-success/10 text-success font-medium" : "bg-error/10 text-error/70"}`} style={{ flex: 1 }}>
                      <span className="truncate">{match.teamA?.name ?? "?"}</span>
                      <span>{match.teamA_score ?? "0"}</span>
                    </div>

                    {/* Spacing */}
                    <div className="h-2" />

                    {/* Team B */}
                    <div className={`flex items-center justify-between px-2 rounded-md transition-colors ${match.status !== "FINISHED" ? "bg-gray-500/10" : !match.winner ? "bg-warning/10 text-warning" : match.winner.id === match.teamB.id ? "bg-success/10 text-success font-medium" : "bg-error/10 text-error/70"}`} style={{ flex: 1 }}>
                      <span className="truncate">{match.teamB?.name ?? "?"}</span>
                      <span>{match.teamB_score ?? "0"}</span>
                    </div>
                  </div>
                </div>

                {/* Horizontal & Vertical Lines */}
                {rIndex < totalRounds - 1 && (
                  <>
                    <div aria-hidden className="tree-connector z-10" style={horizontalConnectorStyle} />
                    <div aria-hidden className="tree-connector z-10" style={verticalConnectorStyle} />
                  </>
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default ScoreboardTree;
