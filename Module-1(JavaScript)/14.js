// 14. jQuery and JS Frameworks

$(document).ready(function() {
  $('#registerBtn').click(function() {
    alert('Register button clicked!');
  });

  $('.eventCard').fadeIn(500);

  // Simulate fade out on click
  $('.eventCard').click(function() {
    $(this).fadeOut(500);
  });
});

/* Benefit of using frameworks like React or Vue:
   They provide component-based architecture, 
   making UI easier to manage, reuse, and update efficiently.
*/
