const Pinterest = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={19}
      viewBox="0 0 14 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.90432 12.2408C5.88949 12.2904 5.87466 12.3351 5.86477 12.3747C5.22218 14.8995 5.15298 15.4601 4.49061 16.6357C4.17426 17.1912 3.82331 17.722 3.42787 18.2279C3.38338 18.2874 3.34384 18.3569 3.25486 18.342C3.156 18.3222 3.15106 18.2329 3.14117 18.1585C3.03737 17.3896 2.97805 16.6208 3.00277 15.847C3.03737 14.84 3.16095 14.4928 4.45601 9.02157C4.47579 8.93725 4.45601 8.86781 4.42636 8.7934C4.11495 7.95511 4.05563 7.10193 4.3275 6.23388C4.91571 4.3688 7.02144 4.22495 7.39216 5.76265C7.61954 6.71503 7.01649 7.96007 6.55679 9.8053C6.17618 11.3232 7.95567 12.4045 9.48306 11.2984C10.8869 10.2765 11.4355 7.82118 11.3317 6.08507C11.1291 2.61781 7.34273 1.8688 4.94043 2.98487C2.18717 4.26463 1.55941 7.68725 2.80505 9.25471C2.96322 9.45312 3.08186 9.57713 3.03243 9.77554C2.95334 10.088 2.88414 10.4055 2.79516 10.718C2.7309 10.9511 2.53813 11.0355 2.3058 10.9412C1.8461 10.7577 1.46549 10.4601 1.15408 10.0781C0.0962788 8.76364 -0.205245 6.16939 1.19363 3.97198C2.74079 1.53646 5.61762 0.554314 8.2473 0.851933C11.3861 1.20908 13.3683 3.36186 13.739 5.80233C13.9071 6.91344 13.7884 9.65649 12.2314 11.596C10.442 13.8232 7.54045 13.972 6.20584 12.6029C6.08721 12.4888 6.00812 12.3648 5.90432 12.2408Z"
        fill="#313131"
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
  );
};
export default Pinterest;
