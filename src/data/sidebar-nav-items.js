export default function() {
  return [
    {
      title: "Diyalog Görünteleme Ekranı",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Aksiyon Parametre Ekranı",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Sabit Mesaj Ekranı",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Rapor Görünteleme Ekranı",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/report-screen",
    }
  ];
}
