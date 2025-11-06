import { useTranslation } from "react-i18next";

function ModalStart({ id, shareCode, setShareCode, onSubmit, onNavigate }) {
  const { t } = useTranslation();

  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-xs md:w-sm px-8">
        <h3 className="font-semibold text-lg text-left">
          {t('get_started')}
        </h3>
        <p className="py-4 text-left mb-4">
          {t('home_description')}
        </p>
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              value={shareCode.trim()}
              onChange={(element) => setShareCode(element.target.value)}
              placeholder={t('enter_code')}
              className="input border border-base-content/50 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="btn bg-primary text-white rounded-md w-full">
              {t('access_tournament')}
            </button>
            <div className="divider py-4">
              <p className="opacity-50">
                {t('or')}
              </p>
            </div>
            <button type="button" className="btn bg-gray-300 text-gray-600 border border-base-300 rounded-md hover:bg-gray-400 w-full" onClick={onNavigate}>
              {t('create_or_manage')}
            </button>
          </form>

        {/* Closing Button */}
        <div className="modal-action">
          <form className="space-x-4" method="dialog">
            <button className="btn border border-base-300 absolute p-3 top-3 right-3 text-gray-500 hover:text-primary rounded-full text-lg leading-none">
              ×
            </button>
          </form>
        </div>
      </div>

      {/* Outside Closing Area */}
      <form className="modal-backdrop" method="dialog">
        <button></button>
      </form>
    </dialog>
  )
}

export default ModalStart;
