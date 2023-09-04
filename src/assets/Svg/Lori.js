const Lori = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={67}
        viewBox="0 0 96 67"
        fill="none"
      >
        <path
          d="M27.4382 67.0003L27.434 66.9877L24.924 62.6128L5.01994 27.917H0L22.4141 66.9919L22.4057 67.0003H22.4182H27.4256H27.4382Z"
          fill="white"
        />
        <path
          d="M47.5141 66.9998L47.5099 66.9872L44.9999 62.6123L42.49 58.2375L39.98 53.8626L37.4742 49.4877L34.96 45.1128L25.0958 27.9165H20.0801L32.4501 49.4877L34.96 53.8626L37.4742 58.2375L39.98 62.6123L42.49 66.9872L42.4858 66.9998H42.4941H47.5057H47.5141Z"
          fill="white"
        />
        <path
          d="M55.0393 62.6128L52.5293 58.2379L50.0193 53.8631L47.5093 49.4882L44.9994 45.1133L42.4894 40.7384L39.9794 36.3636L35.1352 27.917H30.1152L37.4695 40.7384L42.4894 49.4882L44.9994 53.8631L47.5093 58.2379L50.0193 62.6128L52.5293 66.9877L52.5251 67.0003H52.5335H57.545H57.5534L57.5492 66.9919L55.0393 62.6128Z"
          fill="white"
        />
        <path
          d="M65.8574 0H60.8374L42.5146 31.9421L45.0288 36.3169L65.8574 0Z"
          fill="white"
        />
        <path
          d="M32.4573 66.9998H37.4647H37.4772L37.4731 66.9872L34.9589 62.6123L32.4531 58.2375L29.9431 53.8626L15.059 27.9165H10.0391L27.4332 58.2375L29.9431 62.6123L32.4531 66.9872L32.4447 66.9998H32.4573Z"
          fill="white"
        />
        <path
          d="M50.0451 45.0667L75.8978 0H70.8779L47.5352 40.6918L47.5644 40.7381L50.0451 45.0667Z"
          fill="white"
        />
        <path
          d="M55.0656 53.8206L85.9341 0H80.9183L52.5557 49.4416L52.5808 49.4879L55.0656 53.8206Z"
          fill="white"
        />
        <path
          d="M95.9726 0H90.9527L57.5742 58.1913L57.5993 58.2376L60.0842 62.5704L95.9726 0Z"
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

export default Lori;
