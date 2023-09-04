import React from "react";

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div className="mainprev" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            d="M4.87497 11C4.87497 11 1.12501 7.31756 1.125 5.99996C1.12499 4.68237 4.875 1 4.875 1"
            stroke="#EEEBF2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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
      </div>
    </>
  );
};

export default PrevArrow;
