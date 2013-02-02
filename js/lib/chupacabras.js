var feedlimit = 20;

function rssfeedsetup(feed_url){
  var feedpointer = new google.feeds.Feed(feed_url)
  feedpointer.setNumEntries(feedlimit)
  feedpointer.load(storeFeed)
}

function storeFeed(result){
  if(!result.error){
    var thefeeds = result.feed.entries;
    localStorage.rss_elements = JSON.stringify(thefeeds);
    console.log("rss_elements", localStorage.rss_elements);

    renderRSSElements(result.feed.entries);
  } else {
    alert("Error fetching feeds!")
  }
}

function renderRSSElements(rss_elements){
  console.log("renderRSSElements", rss_elements);
  _(rss_elements).each(renderRSSElement);
}

function renderRSSElement(rss_element){
  var list = $('.list').get(0);
  list.add({ title: rss_element.title, desc: rss_element.content});
}

function storeRSS() {
  rss_url = $("#rss_field").val();
  console.log("RSS URL:", rss_url);
  localStorage.rss_url = rss_url;
  rssfeedsetup(rss_url);
}


function start(){
  console.log("start");
  renderRSSElements(JSON.parse(localStorage.rss_elements));
}