const Insta = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M14.1257 3.93359C13.5573 3.93359 13.1025 4.3949 13.1025 4.96038C13.1025 5.53081 13.5622 5.98716 14.1257 5.98716C14.6942 5.98716 15.1489 5.52585 15.1489 4.96038C15.1539 4.3949 14.6942 3.93359 14.1257 3.93359Z"
        fill="#313131"
      />
      <path
        d="M9.56806 5.25293C7.19541 5.25293 5.2627 7.19241 5.2627 9.57337C5.2627 11.9543 7.19541 13.8938 9.56806 13.8938C11.9407 13.8938 13.8734 11.9543 13.8734 9.57337C13.8734 7.19241 11.9407 5.25293 9.56806 5.25293ZM9.56806 12.3462C8.04561 12.3462 6.80986 11.1061 6.80986 9.57833C6.80986 8.05055 8.04561 6.81047 9.56806 6.81047C11.0905 6.81047 12.3263 8.05055 12.3263 9.57833C12.3263 11.1011 11.0905 12.3462 9.56806 12.3462Z"
        fill="#313131"
      />
      <path
        d="M12.9889 18.3534H6.00442C3.10782 18.3534 0.75 15.9873 0.75 13.0806V6.07164C0.75 3.1649 3.10782 0.798828 6.00442 0.798828H12.9889C15.8855 0.798828 18.2433 3.1649 18.2433 6.07164V13.0806C18.2384 15.9873 15.8855 18.3534 12.9889 18.3534ZM6.00442 2.45061C4.01733 2.45061 2.39602 4.07264 2.39602 6.07164V13.0806C2.39602 15.0746 4.01239 16.7016 6.00442 16.7016H12.9889C14.9809 16.7016 16.5973 15.0796 16.5973 13.0806V6.07164C16.5973 4.0776 14.9809 2.45061 12.9889 2.45061H6.00442Z"
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
export default Insta;
