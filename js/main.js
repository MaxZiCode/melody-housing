$(document).ready(function () {
  const counter = $(".counter");
  const floor = $(".home-image path");

  const maxFloorNumber = $('[floor-attr=max]').attr('data-floor');
  const minFloorNumber = $('[floor-attr=min]').attr('data-floor');
  
  let currentFloorText = counter.text();
  updateCurrentFloor();
  
  floor.on('mouseover', function () {
    currentFloorText = $(this).attr('data-floor');
    updateCurrentFloor();
  });
  
  $(".counter-up").on("click", function () {
    if (currentFloorText >= maxFloorNumber)
      return;
    
    currentFloorText++;
    updateCurrentFloor();
  })
  
  $(".counter-down").on("click", function () {
    if (currentFloorText <= minFloorNumber)
      return;
    
    currentFloorText--;
    updateCurrentFloor();
  })
  
  function updateCurrentFloor() {
    currentFloorText = currentFloorText.toLocaleString('en-US', { minimumIntegerDigits: 2});
    counter.text(currentFloorText);
    
    floor.removeClass("current-floor");
    $(`[data-floor=${currentFloorText}]`).toggleClass("current-floor");
  }
});