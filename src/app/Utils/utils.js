export function searchAndFilter(e) {
  let input = e.target.value;
  queryClient.invalidateQueries(
    ["posts", { value: input || "", searchurl }],
    fetchPosts
  );
}
