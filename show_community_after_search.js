window.onload = function() {
//Header content append.

    let locationPath = window.location.href;
    /* INSERT TOP BAR FOR ALL PAGES */
    var rightHeaderDiv = '<div class="topnav">     <div class="topnav-right">  <img class="community-icon" src="https://documentation.infineon.com/html/modustoolbox-software/en/latest/_static/image/community.svg"/><a href="https://community.infineon.com/" target="_blank">Infineon Developer Community</a> </div> </div>';
    var topBar = document.getElementById("wh_top_menu_and_indexterms_link");
    topBar.insertAdjacentHTML("afterend",rightHeaderDiv);
    /* INSERT SEARCH FOOTER ONLY IN SEARCH PAGE */
    if(locationPath.indexOf("/search.html")>-1)
    {
        let searchQuery = locationPath.split("?")[1];
        let searchValue = searchQuery.split("=")[1];
        let htmlText = searchNoResultsDiv(searchValue);
        var resultsDomObj = document.getElementById("results");
        resultsDomObj.innerHTML += htmlText;
        
        /*
        Css file loading dynamically
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "https://kumar-tallapalli.github.io/cookiePopUpFromOnePlace/show_community_after_search.css")
        document.getElementsByTagName("head")[0].appendChild(fileref)
        */
    }
}

function searchNoResultsDiv(searchQuery) {
      
    var noResultsHeading = 'Can’t find what you’re looking for?';
    var noResultsSubHeading = 'Get help from the Infineon Support Community';
    var noResultDescription = 'Find answers or ask questions. Connect with engineers across the globe, help solve technical challenges, and share knowledge with each other.';
    var noResultButtonLabel = 'Search the community';
    var noResultButtonLink = 'https://community.infineon.com/t5/custom/page/page-id/GlobalSearch#q=' + searchQuery + '&t=All&sort=relevancy-psoc6/prisma'
    var NoResultsHtml = '<div class="wh_no_result_div"> <H3 class="wh_no_result_3">' + noResultsHeading + '</H3> <H6 class="wh_no_result_6">' + noResultsSubHeading +  ' </H6><p class=wh_no_result_b>' + noResultDescription +  '</p> <a class="wh_no_result_bt_label" href="' + noResultButtonLink + '" target="_blank">' + noResultButtonLabel+ '</a> </div>';
        return NoResultsHtml;
    }
    
