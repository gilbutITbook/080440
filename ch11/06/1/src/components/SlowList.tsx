import React from "react";

export default React.memo(function SlowList({ query }: { query: string }) {
  console.log("slowlist");
  const items = [];
  // 1ms 작업 지연을 500번 반복하므로 총 500ms 소요
  for (let i = 0; i < 500; i++) {
    items.push(<SlowItem key={i} query={query} />);
  }
  return <ul>{items}</ul>;
});

function SlowItem({ query }: { query: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    /* empty */
  } // 1ms 동안 작업 지연
  return <li>query: {query}</li>;
}
