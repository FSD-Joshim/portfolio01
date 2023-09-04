const Mart = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={66}
        height={65}
        viewBox="0 0 66 65"
        fill="none"
      >
        <path
          d="M40.0177 37.3069V24.9927H27.7035H26.3608H25.0146V27.6815V39.9957H38.6715H40.0177V38.6531V37.3069Z"
          fill="white"
        />
        <path
          d="M58.5597 6.45016C55.7059 3.59876 52.1244 1.58514 48.2053 0.628618C44.2862 -0.327901 40.1797 -0.190643 36.3332 1.02546C32.4867 2.24156 29.0477 4.48987 26.3907 7.52547C23.7337 10.5611 21.9607 14.2676 21.2648 18.2413C21.188 18.6877 21.1218 19.141 21.073 19.5944C21.0241 20.0478 20.9893 20.4942 20.9683 20.9475C20.9683 21.2963 20.9404 21.6694 20.9404 22.0321V44.0729H39.982C40.0064 43.7067 40.0168 43.337 40.0168 42.9639V40.003H25.0208V22.0321C25.0208 21.659 25.0208 21.2893 25.0556 20.9231C25.0835 20.4698 25.1289 20.0199 25.1916 19.577C25.2544 19.1341 25.3311 18.6737 25.4288 18.2308C26.1144 15.0807 27.6355 12.1733 29.8324 9.81398C32.0293 7.45463 34.821 5.73037 37.9143 4.82226C41.0076 3.91414 44.2883 3.85569 47.412 4.65303C50.5357 5.45038 53.387 7.0741 55.6666 9.35369C57.9462 11.6333 59.5699 14.4846 60.3672 17.6083C61.1646 20.732 61.1061 24.0127 60.198 27.106C59.2899 30.1993 57.5657 32.9909 55.2063 35.1879C52.847 37.3848 49.9396 38.9059 46.7895 39.5915V42.9604C46.7895 43.2219 46.7895 43.487 46.7895 43.7486C50.7646 43.0542 54.4727 41.2818 57.5097 38.6247C60.5467 35.9677 62.796 32.5278 64.0123 28.6802C65.2286 24.8327 65.3654 20.725 64.4076 16.805C63.4498 12.8851 61.4342 9.3033 58.5806 6.45016H58.5597Z"
          fill="white"
        />
        <path
          d="M25.0166 24.9962H40.0127V42.9636C40.0127 43.3367 40.0127 43.7064 39.9778 44.0726C39.9499 44.5259 39.9081 44.9758 39.8453 45.4187C39.7825 45.8616 39.7058 46.322 39.6082 46.7614C38.9232 49.9118 37.4026 52.8197 35.2059 55.1795C33.0093 57.5394 30.2177 59.2643 27.1244 60.1729C24.031 61.0815 20.7501 61.1404 17.6261 60.3433C14.5022 59.5463 11.6505 57.9228 9.37059 55.6432C7.09068 53.3637 5.46667 50.5123 4.66912 47.3884C3.87157 44.2646 3.92993 40.9837 4.83804 37.8902C5.74616 34.7967 7.47053 32.0048 9.83005 29.8078C12.1896 27.6108 15.0972 26.0897 18.2475 25.4042V22.0353C18.2475 21.7703 18.2475 21.5052 18.2475 21.2471C14.1587 21.9615 10.3547 23.8159 7.27341 26.5969C4.1921 29.3779 1.95871 32.9725 0.830274 36.9669C-0.298163 40.9613 -0.27578 45.1931 0.894877 49.1753C2.06553 53.1575 4.33687 56.7282 7.44744 59.4765C10.558 62.2247 14.3814 64.0388 18.4775 64.7098C22.5736 65.3809 26.776 64.8816 30.6009 63.2696C34.4258 61.6576 37.7177 58.9983 40.0979 55.5978C42.478 52.1973 43.8496 48.1938 44.0547 44.0482C44.0547 43.8703 44.0547 43.6994 44.0547 43.5215C44.0547 43.4239 44.0547 43.3297 44.0547 43.2356V42.9636V20.9193H25.0131C24.9922 21.2855 24.9818 21.6552 24.9783 22.0283L25.0166 24.9962Z"
          fill="white"
        />
        <template xmlns="" id="transover-popup-template">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .pos_translation {\n      padding-bottom: 3px;\n    }\n\n    strong {\n      font-weight: bold;\n    }\n\n    .rtl {\n      direction: rtl;\n    }\n\n    main {\n      color: #333;\n      font-family: Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      letter-spacing: initial;\n\n      background: #fcf7d9;\n      text-align: left;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #ccc;\n      box-shadow: rgba(0,0,0,0.2) 0px 2px 5px;\n      border-radius: 5px;\n      padding: 6px 8px 3px 8px;\n      position: fixed;\n      z-index: 2147483647;\n      top: -1500px;\n      left: 0;\n      box-sizing: content-box;\n      -webkit-font-smoothing: antialiased;\n      font-smoothing: antialiased;\n      text-rendering: optimizeLegibility;\n\n      /* To fix the following issue:\n      1. Have translate on hover enabled (opposed to translate on click).\n      2. Wisit a website that has a dropdown menu that opens on hover.\n      3. Open the menu.\n      4. Hover over a word within that menu.\n      5. Incidentally move the cursor over the TransOver popup.\n      The hover menu gets closed.\n      */\n      pointer-events: none;\n    }\n\n    .pos_translation {\n      font-size: 1em;\n      line-height: 1.2em;\n    }\n\n    .red {\n      color: red;\n    }\n\n    .from_lang {\n      color: grey;\n      font-size: 0.8em;\n      line-height: 1.2em;\n      margin-top: 2px;\n      margin-bottom: 3px;\n    }\n  ",
            }}
          />
          <main translate="no" />
        </template>
      </svg>
    </>
  );
};
export default Mart;
