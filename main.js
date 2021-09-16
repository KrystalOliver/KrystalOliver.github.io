window.onload = function() {
    document.getElementById('modalButton').onclick = function() {
        var modal = document.getElementById('comparisonModal');
        modal.style.display = 'block';
    }
    
    document.getElementById('closeButton').onclick= function() {
        var modal = document.getElementById('comparisonModal');
        modal.style.display = 'none';
    }
}
