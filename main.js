// Get modal element
document.addEventListener ('DOMContentLoaded', function () {
  (function init () {
    const modal = document.getElementById ('simpleModal');
    // Get open modal button
    const modalBtn = document.getElementById ('modalBtn');
    // Get close button
    const closeBtn = document.querySelector ('.closeBtn');
    // Get modal header
    const modalHeader = document.querySelector ('.modal-header');
    // Get modal content
    const modalContent = document.querySelector ('.modal-content');

    // Listen for open click
    modalBtn.addEventListener ('click', openModal);

    // Listen for close click
    closeBtn.addEventListener ('click', closeModal);
    // Outside click
    window.addEventListener ('click', clickOutside);

    //Make the DIV element draggagle:
    dragElement (modalContent);

    // Function to open modal
    function openModal () {
      modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal () {
      modal.style.display = 'none';
    }

    // Function to close modal if outside click
    function clickOutside (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    }

    function dragElement (elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (modalHeader) {
          /* if present, the header is where you move the DIV from:*/
          modalHeader.onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
  
        function dragMouseDown (e) {
          e = e || window.event;
          e.preventDefault ();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
  
        function elementDrag (e) {
          e = e || window.event;
          e.preventDefault ();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
          elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
        }
  
        function closeDragElement () {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }


  }) ();
});
