router.get("/", function (req, res, next) {
  const now = new Date().toLocaleString();
  res.json({
    status: "✅ API is working properly",
    datetime: now
  });
});
