const Web = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M25 18.125V8.125C25 5.76798 25 4.58947 24.2678 3.85723C23.5355 3.125 22.357 3.125 20 3.125H10C7.64298 3.125 6.46447 3.125 5.73223 3.85723C5 4.58947 5 5.76798 5 8.125V18.125"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.4919H10.2022C11.2164 10.4919 11.7235 10.4919 12.1107 10.7096C12.4979 10.9274 12.6719 11.3105 13.02 12.0766L13.4406 13.0023C13.6694 13.5058 13.7837 13.7575 13.9683 13.7497C14.1528 13.7419 14.2336 13.4819 14.3953 12.9618L15.8415 8.30915C16.0079 7.77408 16.091 7.50654 16.2774 7.5C16.4638 7.49346 16.5756 7.75415 16.7993 8.27553L17.0526 8.866C17.3894 9.65122 17.5578 10.0438 17.9486 10.2679C18.3394 10.4919 18.8557 10.4919 19.8885 10.4919H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.37202 19.3943L5.02441 18.125H24.9397L25.6279 19.3943C27.4315 22.7212 27.8807 24.3846 27.1952 25.6298C26.5096 26.875 24.692 26.875 21.0567 26.875L8.94328 26.875C5.30802 26.875 3.49039 26.875 2.80484 25.6298C2.11928 24.3846 2.56843 22.7212 4.37202 19.3943Z"
        stroke="white"
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
  );
};
export default Web;
