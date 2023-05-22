import './LessonBrowser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const LessonBrowser = (props) => {
  return ( 
    <div className='browserbody'>
    <div></div>
<div className="window">
  <header className="windowheader">
    <div className="tabs">
      <div className="tab">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14277 3.67742C7.79189 1.51694 6.96431 0 6.00121 0C5.03811 0 4.21053 1.51694 3.85965 3.67742H8.14277Z" fill="#6D6E70"/>
        <path d="M3.67816 6C3.67816 6.5371 3.7072 7.05242 3.75802 7.54839H8.24198C8.2928 7.05242 8.32184 6.5371 8.32184 6C8.32184 5.4629 8.2928 4.94758 8.24198 4.45161H3.75802C3.7072 4.94758 3.67816 5.4629 3.67816 6Z" fill="#6D6E70"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71204 0.251613C9.44223 0.764516 10.8433 2.03468 11.5354 3.67742H8.92196C8.70901 2.30081 8.30248 1.06935 7.71204 0.251613ZM0.46703 3.67742C1.15668 2.03468 2.56019 0.764516 4.28796 0.251613C3.69752 1.06935 3.29099 2.30081 3.08046 3.67742H0.46703ZM9.01875 4.45161H11.7943C11.925 4.94758 12 5.4629 12 6C12 6.5371 11.925 7.05242 11.7919 7.54839H9.01875C9.06957 7.04032 9.09861 6.52016 9.09861 6C9.09861 5.47984 9.06957 4.95968 9.01875 4.45161ZM2.98367 4.45161C2.93285 4.95968 2.90381 5.47984 2.90381 6C2.90381 6.52016 2.93285 7.04032 2.98125 7.54839H0.208106C0.077435 7.05242 0 6.5371 0 6C0 5.4629 0.077435 4.94758 0.208106 4.45161H2.98367ZM11.5378 8.32258C10.8457 9.96532 9.44223 11.2355 7.71446 11.7484C8.3049 10.9306 8.71143 9.69919 8.92438 8.32258H11.5378ZM4.29038 11.7484C2.56019 11.2355 1.1591 9.96532 0.46703 8.32258H3.08046C3.29341 9.69919 3.69994 10.9306 4.29038 11.7484Z" fill="#BABABC"/>
        <path d="M3.85965 8.32258C4.21053 10.4831 5.03811 12 6.00121 12C6.96431 12 7.79189 10.4831 8.14277 8.32258H3.85965Z" fill="#6D6E70"/>
      </svg>New Tab 
        <button aria-label="close tab" onClick={() => props.setModalShow(true)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.5 12.5L3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
      <button aria-label="open new tab"> 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M2.5 8H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M8 2.5V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
    </div>
    <div className="window-actions">
      <button className="carrot" aria-label="carrot">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6L8 11L3 6" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div></div>
      <button aria-label="minimize">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 8H13.5" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button aria-label="maximize">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button aria-label="close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 3.5L3.5 12.5" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 12.5L3.5 3.5" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </header>
  <nav className="toolbar">
    <div className="toolbar-left">
    <button aria-label="go back">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.875 10H3.125" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.75 4.375L3.125 10L8.75 15.625" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
    <button aria-label="go forward">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.125 10H16.875" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </button>
    <button aria-label="reload">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7656 7.78906H17.5156V4.03906" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8594 14.8594C13.8982 15.8214 12.6732 16.4768 11.3394 16.7425C10.0056 17.0082 8.62301 16.8724 7.36644 16.3522C6.10987 15.832 5.03581 14.9508 4.28013 13.8201C3.52445 12.6894 3.12109 11.36 3.12109 10C3.12109 8.64002 3.52445 7.31058 4.28013 6.17988C5.03581 5.04917 6.10987 4.16798 7.36644 3.64779C8.62301 3.12761 10.0056 2.99179 11.3394 3.25752C12.6732 3.52324 13.8982 4.17858 14.8594 5.14063L17.5157 7.78907" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button aria-label="homepage">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6719 6.5623L8.42187 0.882614C8.30666 0.777207 8.15616 0.71875 8 0.71875C7.84384 0.71875 7.69334 0.777207 7.57812 0.882614L1.32812 6.5623C1.26523 6.6217 1.21486 6.69308 1.17998 6.77224C1.14509 6.8514 1.1264 6.93674 1.125 7.02324V14.2498C1.125 14.4156 1.19085 14.5745 1.30806 14.6917C1.42527 14.809 1.58424 14.8748 1.75 14.8748H14.25C14.4158 14.8748 14.5747 14.809 14.6919 14.6917C14.8092 14.5745 14.875 14.4156 14.875 14.2498V7.02324C14.8736 6.93674 14.8549 6.8514 14.82 6.77224C14.7851 6.69308 14.7348 6.6217 14.6719 6.5623Z" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
    </div>
    <div className="search">
      <input className='browserText' type="text" placeholder="https://yourlink.com/example"/>
      <svg className='lock' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.125 5.25H9.5625V3.5625C9.5625 1.59844 7.96406 0 6 0C4.03594 0 2.4375 1.59844 2.4375 3.5625V5.25H1.875C1.25391 5.25 0.75 5.75391 0.75 6.375V10.875C0.75 11.4961 1.25391 12 1.875 12H10.125C10.7461 12 11.25 11.4961 11.25 10.875V6.375C11.25 5.75391 10.7461 5.25 10.125 5.25ZM7.6875 5.25H4.3125V3.5625C4.3125 2.63203 5.06953 1.875 6 1.875C6.93047 1.875 7.6875 2.63203 7.6875 3.5625V5.25Z" fill="#2ACB42"/>
      </svg>
      <svg className='google' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8667 6.13331C11.8667 5.71731 11.8294 5.31731 11.7601 4.9333H6.23471V7.20531H9.39205C9.25338 7.93597 8.83738 8.55464 8.21338 8.97064V10.448H10.1174C11.2267 9.42397 11.8667 7.91997 11.8667 6.13331Z" fill="#4285F4"/>
        <path d="M6.23468 11.8666C7.81868 11.8666 9.14672 11.344 10.1174 10.448L8.21338 8.97064C7.69071 9.32264 7.02401 9.53596 6.23468 9.53596C4.70934 9.53596 3.41334 8.50663 2.94934 7.11996H0.997339V8.63463C1.96267 10.5493 3.94134 11.8666 6.23468 11.8666Z" fill="#34A853"/>
        <path d="M2.94938 7.11461C2.83204 6.76261 2.76271 6.38928 2.76271 5.99994C2.76271 5.61061 2.83204 5.23728 2.94938 4.88528V3.37061H0.997376C0.597376 4.15994 0.368042 5.05061 0.368042 5.99994C0.368042 6.94928 0.597376 7.83995 0.997376 8.62928L2.51738 7.44528L2.94938 7.11461Z" fill="#FBBC05"/>
        <path d="M6.23468 2.4693C7.09868 2.4693 7.86668 2.76797 8.48001 3.34397L10.16 1.66397C9.14135 0.714635 7.81868 0.133301 6.23468 0.133301C3.94134 0.133301 1.96271 1.45061 0.997376 3.37061L2.94938 4.88528C3.41338 3.49861 4.70934 2.4693 6.23468 2.4693Z" fill="#EA4335"/>
      </svg>
      <svg className='downloads' width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6.5L13 3.5M13 3.5L10 0.5M13 3.5H9.5C8.16958 3.5004 6.87694 3.94252 5.82495 4.75697C4.77295 5.57141 4.02114 6.71209 3.6875 8M11 10.5H1.5C1.36739 10.5 1.24021 10.4473 1.14645 10.3536C1.05268 10.2598 1 10.1326 1 10V2.5" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    {/* <button aria-label="history, bookmarks and more"> */}
      <svg className='bkstar' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.275 11.9188L10.425 13.9188C10.8312 14.175 11.3312 13.7938 11.2125 13.325L10.3 9.73752C10.2753 9.63808 10.2792 9.53369 10.3113 9.43638C10.3434 9.33907 10.4023 9.2528 10.4812 9.18752L13.3062 6.83127C13.675 6.52502 13.4875 5.90627 13.0062 5.87502L9.31875 5.63752C9.21813 5.63166 9.1214 5.59663 9.04038 5.53669C8.95935 5.47675 8.89754 5.39451 8.8625 5.30002L7.4875 1.83752C7.4511 1.73745 7.38479 1.65102 7.29758 1.58994C7.21037 1.52886 7.10647 1.49609 7 1.49609C6.89352 1.49609 6.78963 1.52886 6.70241 1.58994C6.6152 1.65102 6.54889 1.73745 6.5125 1.83752L5.1375 5.30002C5.10245 5.39451 5.04064 5.47675 4.95962 5.53669C4.87859 5.59663 4.78186 5.63166 4.68125 5.63752L0.993747 5.87502C0.512497 5.90627 0.324997 6.52502 0.693747 6.83127L3.51875 9.18752C3.59771 9.2528 3.65661 9.33907 3.68868 9.43638C3.72075 9.53369 3.72467 9.63808 3.7 9.73752L2.85625 13.0625C2.7125 13.625 3.3125 14.0813 3.79375 13.775L6.725 11.9188C6.8072 11.8665 6.90259 11.8387 7 11.8387C7.09741 11.8387 7.1928 11.8665 7.275 11.9188Z" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/* </button> */}



    </div>
    <div className="toolbar-right">
    <button aria-label="extensions">
    <svg width="16" height="16" viewBox="0 0 16 16"  fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00005 15.8749C3.83429 15.8749 3.67532 15.809 3.55811 15.6918C3.4409 15.5746 3.37505 15.4156 3.37505 15.2499V11.9139C3.03216 12.0775 2.65215 12.1476 2.27348 12.1171C1.95285 12.0935 1.64136 11.9996 1.36117 11.8419C1.08097 11.6843 0.838971 11.4668 0.652385 11.205C0.465798 10.9432 0.339213 10.6435 0.28164 10.3272C0.224066 10.0109 0.236919 9.68578 0.319283 9.37501C0.401647 9.06425 0.551498 8.77546 0.758171 8.52919C0.964844 8.28293 1.22326 8.08525 1.51502 7.95023C1.80679 7.8152 2.12473 7.74614 2.44621 7.74797C2.7677 7.74979 3.08484 7.82246 3.37505 7.9608V4.62486C3.37505 4.4591 3.4409 4.30013 3.55811 4.18292C3.67532 4.06571 3.83429 3.99986 4.00005 3.99986H7.64848C7.48492 3.65698 7.41485 3.27697 7.44536 2.8983C7.46892 2.57767 7.56286 2.26618 7.7205 1.98598C7.87814 1.70579 8.0956 1.46379 8.35741 1.2772C8.61922 1.09061 8.91894 0.96403 9.23524 0.906456C9.55153 0.848883 9.87663 0.861735 10.1874 0.9441C10.4982 1.02646 10.787 1.17632 11.0332 1.38299C11.2795 1.58966 11.4772 1.84808 11.6122 2.13984C11.7472 2.4316 11.8163 2.74954 11.8144 3.07103C11.8126 3.39252 11.7399 3.70965 11.6016 3.99986H15.25C15.4158 3.99986 15.5748 4.06571 15.692 4.18292C15.8092 4.30013 15.875 4.4591 15.875 4.62486V7.9608C15.5322 7.79724 15.1522 7.72716 14.7735 7.75768C14.4529 7.78123 14.1414 7.87518 13.8612 8.03282C13.581 8.19046 13.339 8.40792 13.1524 8.66973C12.9658 8.93154 12.8392 9.23126 12.7816 9.54755C12.7241 9.86385 12.7369 10.189 12.8193 10.4997C12.9016 10.8105 13.0515 11.0993 13.2582 11.3455C13.4648 11.5918 13.7233 11.7895 14.015 11.9245C14.3068 12.0595 14.6247 12.1286 14.9462 12.1268C15.2677 12.1249 15.5848 12.0523 15.875 11.9139V15.2499C15.875 15.4156 15.8092 15.5746 15.692 15.6918C15.5748 15.809 15.4158 15.8749 15.25 15.8749H4.00005Z" fill="#6D6E70"/>
    </svg>

    </button>
    <button aria-label="show sidebars">
    <svg width="16" height="12" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0.75V13.25H14.875C15.2202 13.25 15.5 12.9702 15.5 12.625V1.375C15.5 1.02982 15.2202 0.75 14.875 0.75H11Z" fill="#6D6E70"/>
      <path d="M11 0.75V13.25M11 0.75H1.125M11 0.75H14.875M11 13.25H1.125M11 13.25H14.875M1.125 0.75H14.875M1.125 0.75C0.779822 0.75 0.5 1.02982 0.5 1.375V12.625C0.5 12.9702 0.779822 13.25 1.125 13.25M14.875 0.75C15.2202 0.75 15.5 1.02982 15.5 1.375V12.625C15.5 12.9702 15.2202 13.25 14.875 13.25M14.875 13.25H1.125" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
    <button aria-label="account">
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 17C15.7614 17 18 14.7614 18 12C18 9.23858 15.7614 7 13 7C10.2386 7 8 9.23858 8 12C8 14.7614 10.2386 17 13 17ZM13 17C11.3379 17 9.70838 17.4592 8.2919 18.3287C6.87542 19.1981 5.72736 20.4428 4.97498 21.9248M13 17C14.662 17 16.2916 17.4592 17.708 18.3287C19.1245 19.1981 20.2726 20.4428 21.025 21.9248M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#6D6E70" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
    <button aria-label="menu">
    <FontAwesomeIcon icon={faEllipsisVertical} size="2xl" style={{color: "#6d6e70",}} /> 
    </button>
    </div>
  </nav>
  <main className='windowmain'>
  <img className="mainwindowimg" src="https://s3-alpha-sig.figma.com/img/4fb1/c415/7066751ef294615e7a96901f29ff268d?Expires=1685923200&Signature=lXjePuz24wxS8Kem5wmOtmk~G~Vvb8XNhyoL~Qgz4yT7bghflqzeoJvfjM-e2vCbPTDibB8s5nK-o0--5csqTAYy6XvuXuXarPiaep2EmaUUFunPCfd-AqyyXeOB0Eh23W2YJQDtXW7Q8x7hgenHYjFXCTNjMQFdd5dyebikP2qfamoCPt7T-xjg-oGX0R6wprZDxxUYXn025evPqlmIGPqIALz6yzVhY5CAUeTLYqAEVkZXsvZp9lywJvIz5Ugcrk4HGBhS9kUIjP~4kSn2Zxqld1A60~Oaa2LJKgloGkJOGwmWhPDy8zpu1es-nzI4QsJR3bba1R8UdjEBCVVf9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
  </main>
</div>
    </div>
   );
}
 
export default LessonBrowser

// xmlns:xlink="http://www.w3.org/1999/xlink"