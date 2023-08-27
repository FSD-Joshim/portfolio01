const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={19}
      viewBox="0 0 10 19"
      fill="none"
    >
      <path
        d="M8.75407 10.6713L9.23849 7.49672H6.20348V5.43323C6.20348 4.56517 6.62858 3.71696 7.98791 3.71696H9.36701V1.01359C9.36701 1.01359 8.11642 0.800293 6.91527 0.800293C4.41411 0.800293 2.77797 2.32311 2.77797 5.07609V7.49672H0V10.6713H2.77797V18.3499H6.19854V10.6713H8.75407Z"
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
export default Facebook;
