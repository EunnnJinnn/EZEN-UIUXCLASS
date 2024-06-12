const videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minutes ago",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];
export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getupload = (req, res) => {
  return res.render("upload", {
    pageTitle: "Upload Video",
  });
};

export const postupload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title, //key와 value 값이 동일한 경우 하나로 사용
    createdAt: "just now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  // redirect = 경로를 줄 수 있음
  return res.redirect("/");
};

export const search = (req, res) => {
  return res.send("Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
