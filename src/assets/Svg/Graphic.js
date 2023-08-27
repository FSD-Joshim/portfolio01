const Graphic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M4.4873 22.7212C4.30068 22.5927 4.12707 22.4481 3.96447 22.2855C2.5 20.8211 2.5 18.464 2.5 13.75C2.5 9.03596 2.5 6.67893 3.96447 5.21447C5.42893 3.75 7.78596 3.75 12.5 3.75H17.5C22.214 3.75 24.5711 3.75 26.0355 5.21447C27.5 6.67893 27.5 9.03596 27.5 13.75C27.5 18.464 27.5 20.8211 26.0355 22.2855C25.8729 22.4481 25.6993 22.5927 25.5127 22.7212"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.8579 21.1575C9.77714 21.8156 6.94354 23.1595 8.66939 24.8411C9.51246 25.6625 10.4514 26.25 11.6319 26.25H18.3681C19.5486 26.25 20.4875 25.6625 21.3306 24.8411C23.0565 23.1595 20.2229 21.8156 19.1421 21.1575C16.6078 19.6142 13.3922 19.6142 10.8579 21.1575Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.125 13.75C18.125 15.4759 16.7259 16.875 15 16.875C13.2741 16.875 11.875 15.4759 11.875 13.75C11.875 12.0241 13.2741 10.625 15 10.625C16.7259 10.625 18.125 12.0241 18.125 13.75Z"
        stroke="white"
        strokeWidth="1.5"
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
export default Graphic;
