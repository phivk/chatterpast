var leftSidebarContent       = `
  <div class="text-center pt-5 mt-5 dark-blue">
    <img class="mw-100 mb-4" src="https://raw.githubusercontent.com/phivk/chatterpast/main/assets/img/avatars.png" alt="chatterpast avatars">
    <h1 class="fw8">Chatterpast</h1>
    <h4 class="fw6">
      Tolerant Futures<br>
      through<br>
      Ancient Identities
    </h4>
  </div>`;
var rightSidebarContent      = `
  <p class="lead fw4">Explore life in Iron Age and Roman Britannia with Enica and her friends.</p>
  <p>Old lifeways are being challenged by the arrival of new people, new ideas, and new ways of living. Sharing experiences on Chatterpast has allowed a small group of kids to become friends, despite their differences. </p>
  <p>Discover their unique stories from across Britannia. Question them about their lives and reflect on how these relate to the present.</p>
  <p>The friends are also curious about how things turned out around 2000 years in their future!</p>`;
var userResponseHintContent  = 'Choose one option to continue the conversation';
var modalTitleContent        = 'Leave the chat?';
var modalBodyContent         = '<p>If you leave the chat, your history will be lost and you will have to start from the beginning.</p>';
var modalFooterContent       = '<button type="button" class="btn rounded-0 btn-link" data-dismiss="modal">Stay</button><a href="/?lang=en" type="button" class="btn rounded-0 btn-danger">Leave</a>';
var navLinkBackContent       = '<img class="nav-icon nav-icon-back" src="https://fillafulla.sng.sk/img/icon-back.svg">';
var navLinkMenuContent       = '<img class="nav-icon nav-icon-menu" src="https://fillafulla.sng.sk/img/icon-hamburger.svg">';

inject_nav_back(navLinkBackContent);
inject_nav_menu(navLinkMenuContent);
inject_left_sidebar(leftSidebarContent);
inject_right_sidebar(rightSidebarContent);
inject_hint(userResponseHintContent);
inject_modal(modalTitleContent, modalBodyContent, modalFooterContent);

$(document).ready(function() {
  fade_in_content_containers();
});
