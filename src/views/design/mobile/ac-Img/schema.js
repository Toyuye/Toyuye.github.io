export default {
  title: "图片",
  groupActiveKey: 1,
  groups: [
    {
      key: 1,
      title: "横向滚动",
      icon: "",
      settingsApi: {
        ImgItems: {
          value: [],
          rules: [],
          components: {
            props: {},
            type: "ac-Img"
          }
        }
      },
      settingsLayout: {
        content: [
          {
            type: "block",
            title: "title",
            settings: ["ImgItems"]
          }
        ],
        styles: [
          {
            type: "block",
            title: "title",
            settings: ["ImgItems"]
          }
        ]
      },
      cover: {
        display: true,
        data: {}
      }
    }
  ]
};
