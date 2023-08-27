const Uxui = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M6.25 27.5C4.17893 27.5 2.5 25.8211 2.5 23.75C2.5 21.6789 4.17893 20 6.25 20C8.32107 20 10 21.6789 10 23.75C10 25.8211 8.32107 27.5 6.25 27.5Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M23.75 27.5C21.6789 27.5 20 25.8211 20 23.75C20 21.6789 21.6789 20 23.75 20C25.8211 20 27.5 21.6789 27.5 23.75C27.5 25.8211 25.8211 27.5 23.75 27.5Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M23.75 20C23.5215 16.9338 22.2461 16.25 17.934 16.25L12.066 16.25C7.75394 16.25 6.4785 16.9338 6.25 20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12.5C12.2386 12.5 10 10.2614 10 7.5C10 4.73858 12.2386 2.5 15 2.5C17.7614 2.5 20 4.73858 20 7.5C20 10.2614 17.7614 12.5 15 12.5Z"
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
export default Uxui;
