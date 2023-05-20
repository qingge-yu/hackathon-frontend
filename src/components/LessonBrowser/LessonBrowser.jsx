import './LessonBrowser.css'

const LessonBrowser = (props) => {
  return ( 
    <div className='browserbody'>
    
<div class="window">
  <header class="windowheader">
    <div class="window-actions">
      <button aria-label="close"></button>
      <button aria-label="minimize"></button>
      <button aria-label="maximize"></button>
    </div>
    <div class="tabs">
      <div class="tab">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
          <circle cx="9" cy="9" r="9" fill="var(--red-0)"></circle>
          <path d="M18 9C18 13.9706 15.4688 3.09375 9 10.125C2.53125 17.1562 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="var(--orange-0)"></path>
          <path d="M18 9C18 13.9706 14.9062 0.84375 8.29688 6.1875C1.6875 11.5312 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="var(--yellow-0)"></path>
        </svg>New Tab
        <button aria-label="close tab" onClick={() => props.setModalShow(true)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.5 12.5L3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
      <button aria-label="open new tab"> 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M2.5 8H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 2.5V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </header>
  <nav class="toolbar">
    <button aria-label="go back">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M15.1875 9H2.8125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.875 3.9375L2.8125 9L7.875 14.0625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="go forward">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M2.8125 9H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M10.125 3.9375L15.1875 9L10.125 14.0625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="reload">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M12.3868 7.01123H15.7618V3.63623" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13.3752 13.3752C12.5099 14.2406 11.4074 14.8299 10.2071 15.0686C9.00686 15.3074 7.76276 15.1848 6.63215 14.7165C5.50153 14.2482 4.53517 13.4551 3.85528 12.4376C3.17539 11.4201 2.8125 10.2238 2.8125 9C2.8125 7.77623 3.17539 6.57994 3.85528 5.56241C4.53517 4.54488 5.50153 3.75182 6.63215 3.2835C7.76276 2.81518 9.00686 2.69265 10.2071 2.93139C11.4074 3.17014 12.5099 3.75944 13.3752 4.62478L15.7617 7.01126" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="homepage">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M15.1866 15.1875V8.12383C15.1866 8.04546 15.1703 7.96795 15.1386 7.89627C15.1069 7.8246 15.0605 7.76034 15.0025 7.70762L9.37714 2.59343C9.2736 2.4993 9.13868 2.44714 8.99874 2.44714C8.8588 2.44715 8.72388 2.49932 8.62034 2.59346L2.99573 7.70762C2.93775 7.76034 2.89142 7.8246 2.85972 7.89627C2.82802 7.96794 2.81165 8.04544 2.81165 8.12381V15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M1.12415 15.1875H16.8741" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M10.6863 15.1869V11.2494C10.6863 11.1002 10.627 10.9571 10.5215 10.8516C10.416 10.7462 10.273 10.6869 10.1238 10.6869H7.87378C7.7246 10.6869 7.58152 10.7462 7.47603 10.8516C7.37054 10.9571 7.31128 11.1002 7.31128 11.2494V15.1869" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <div class="search">
      <input className='browserText' type="text" placeholder="Search with QuackQuackGo or enter address"/>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M8.15613 14.0625C11.4181 14.0625 14.0624 11.4182 14.0624 8.15625C14.0624 4.89432 11.4181 2.25 8.15613 2.25C4.8942 2.25 2.24988 4.89432 2.24988 8.15625C2.24988 11.4182 4.8942 14.0625 8.15613 14.0625Z" stroke="var(--cream-0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12.3323 12.3329L15.7495 15.7501" stroke="var(--cream-0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    <button>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M9 5.625H15.1875C15.3367 5.625 15.4798 5.68426 15.5852 5.78975C15.6907 5.89524 15.75 6.03832 15.75 6.1875V14.0625C15.75 14.2117 15.6907 14.3548 15.5852 14.4602C15.4798 14.5657 15.3367 14.625 15.1875 14.625H2.8125C2.66345 14.6246 2.52063 14.5652 2.41523 14.4598C2.30984 14.3544 2.25044 14.2116 2.25 14.0625V7.3125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.5625 7.3125H2.25V4.5C2.25 4.35082 2.30926 4.20774 2.41475 4.10225C2.52024 3.99676 2.66332 3.9375 2.8125 3.9375H6.5625C6.68421 3.9375 6.80263 3.97697 6.9 4.05L9 5.625L6.9 7.2C6.80263 7.27303 6.68421 7.3125 6.5625 7.3125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>Hacks
    </button>
    <button aria-label="downloads">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M6.04688 7.73511L9 10.6875L11.9531 7.73511" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 2.8125V10.6854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M15.1875 10.6875V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="history, bookmarks and more">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M5.625 2.8125H3.375C3.06434 2.8125 2.8125 3.06434 2.8125 3.375V14.625C2.8125 14.9357 3.06434 15.1875 3.375 15.1875H5.625C5.93566 15.1875 6.1875 14.9357 6.1875 14.625V3.375C6.1875 3.06434 5.93566 2.8125 5.625 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2.8125 5.625H6.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 2.8125H6.75C6.43934 2.8125 6.1875 3.06434 6.1875 3.375V14.625C6.1875 14.9357 6.43934 15.1875 6.75 15.1875H9C9.31066 15.1875 9.5625 14.9357 9.5625 14.625V3.375C9.5625 3.06434 9.31066 2.8125 9 2.8125Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.1875 12.375H9.5625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12.2821 2.63254L10.1088 3.21489C9.80869 3.29529 9.63061 3.60373 9.71102 3.90381L12.6227 14.7705C12.7031 15.0706 13.0116 15.2487 13.3117 15.1683L15.485 14.5859C15.7851 14.5055 15.9632 14.1971 15.8828 13.897L12.971 3.03029C12.8906 2.73022 12.5822 2.55214 12.2821 2.63254Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12.0403 12.5971L15.3003 11.7236" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M10.2935 6.07713L13.5535 5.20361" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="show sidebars">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M14.3438 3.09375H3.65625C3.34559 3.09375 3.09375 3.34559 3.09375 3.65625V14.3438C3.09375 14.6544 3.34559 14.9062 3.65625 14.9062H14.3438C14.6544 14.9062 14.9062 14.6544 14.9062 14.3438V3.65625C14.9062 3.34559 14.6544 3.09375 14.3438 3.09375Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 3.09375V14.9062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9.84326 3.09375L14.9062 8.15666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 6.18787L14.9063 12.0941" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 10.1254L13.7808 14.9062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="account">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 11.25C10.5533 11.25 11.8125 9.9908 11.8125 8.4375C11.8125 6.8842 10.5533 5.625 9 5.625C7.4467 5.625 6.1875 6.8842 6.1875 8.4375C6.1875 9.9908 7.4467 11.25 9 11.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4.48584 14.0185C4.90955 13.1854 5.55552 12.4859 6.35224 11.9973C7.14895 11.5086 8.06534 11.25 8.99996 11.25C9.93458 11.25 10.851 11.5086 11.6477 11.9972C12.4444 12.4859 13.0904 13.1854 13.5141 14.0185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <button aria-label="menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <path d="M2.8125 9H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2.8125 4.5H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2.8125 13.5H15.1875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  </nav>
  <main className='windowmain'>
    <h1>
      <svg width="64" height="64" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
        <circle cx="9" cy="9" r="9" fill="var(--red-0)"></circle>
        <path d="M18 9C18 13.9706 15.4688 3.09375 9 10.125C2.53125 17.1562 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="var(--orange-0)"></path>
        <path d="M18 9C18 13.9706 14.9062 0.84375 8.29688 6.1875C1.6875 11.5312 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="var(--yellow-0)"></path>
      </svg>Gruvfox
    </h1>
  </main>
</div>
    </div>
   );
}
 
export default LessonBrowser