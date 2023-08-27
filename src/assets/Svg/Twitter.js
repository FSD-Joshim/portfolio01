const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={19}
      viewBox="0 0 22 19"
      fill="none"
    >
      <path
        d="M21.1598 2.90673C20.4826 3.21427 19.7411 3.3978 19.0095 3.52181C19.3556 3.46229 19.8647 2.83729 20.0674 2.57935C20.3788 2.19245 20.6358 1.75098 20.7791 1.27479C20.7989 1.2351 20.8137 1.19046 20.7742 1.1607C20.7297 1.14086 20.6951 1.15078 20.6605 1.17062C19.8499 1.60713 19.0095 1.92459 18.1099 2.1478C18.0358 2.16765 17.9814 2.1478 17.932 2.10316C17.8578 2.01883 17.7886 1.93947 17.7095 1.87499C17.3339 1.55256 16.9285 1.29959 16.4738 1.11606C15.8757 0.873002 15.2232 0.768834 14.5806 0.808516C13.9528 0.848199 13.3399 1.02677 12.7863 1.31943C12.2277 1.61209 11.7334 2.01884 11.338 2.50495C10.9277 3.0109 10.6262 3.6111 10.473 4.24602C10.3247 4.85614 10.3346 5.4613 10.4285 6.08134C10.4433 6.1855 10.4334 6.19543 10.3395 6.1855C6.83986 5.66467 3.93831 4.40475 1.58544 1.71626C1.48164 1.59721 1.42726 1.59721 1.34323 1.72618C0.315085 3.2738 0.814329 5.76388 2.09951 6.98908C2.27252 7.15277 2.44552 7.31646 2.6383 7.46527C2.5691 7.48015 1.71396 7.3859 0.94779 6.98908C0.843987 6.92459 0.794557 6.95931 0.784671 7.07836C0.774785 7.24701 0.789614 7.40078 0.814329 7.57935C1.01205 9.15177 2.09457 10.6051 3.58241 11.1706C3.76036 11.245 3.95314 11.3095 4.14592 11.3442C3.80979 11.4186 3.45884 11.4732 2.49001 11.3938C2.37138 11.369 2.32195 11.4335 2.37138 11.5476C3.098 13.5417 4.67482 14.1369 5.85126 14.4742C6.00943 14.504 6.16761 14.504 6.32578 14.5387C6.3159 14.5536 6.30601 14.5536 6.29613 14.5684C5.90563 15.1686 4.55124 15.6101 3.91854 15.8333C2.77176 16.2351 1.52118 16.4186 0.310142 16.2996C0.117365 16.2698 0.0728777 16.2748 0.0234476 16.2996C-0.0309255 16.3343 0.0185046 16.379 0.0778207 16.4286C0.324971 16.5923 0.572122 16.7361 0.829158 16.875C1.60027 17.2867 2.40104 17.6091 3.24135 17.8423C7.58131 19.0426 12.465 18.1597 15.7224 14.9157C18.278 12.3661 19.1776 8.84919 19.1776 5.32737C19.1776 5.18848 19.3407 5.11408 19.4346 5.03967C20.102 4.53868 20.6358 3.93848 21.135 3.26884C21.2487 3.12003 21.2487 2.9861 21.2487 2.93154C21.2487 2.92162 21.2487 2.91169 21.2487 2.91169C21.2487 2.85217 21.2487 2.86705 21.1598 2.90673Z"
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
export default Twitter;
