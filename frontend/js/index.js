const serverAddress = 'http://127.0.0.1:3000';
var productDetail;
document.addEventListener('DOMContentLoaded', function() {
    $('select#condition').on('change', function() {

        // when price condition is changed
        if ($('#condition').val() == 'lessThanCurrent') {
            $('#greaterThanInput').val(0);
            $('#lessThanInput').val(productDetail.price);
            $('#greaterThanInput').attr('readonly', 'true');
        }
    });
});

$(document).ready(function() {
    // get the current tab url and fetch the product ID
    getCurrentTabUrl(function(url) {
        // jquery function to get the url 
        if ($.urlParam('pid', url) != null) {
            getProductDetails({
                'productId': $.urlParam('pid', url)
            }, function(data) {
                productDetail = data;
                $('#name').text(productDetail.name);
                $('#current_price').text(productDetail.price);
                var imageURL;
                for (var key in productDetail.imageurls) {
                    imageURL = productDetail.imageurls[key];
                }
                $('#img').attr('src', imageURL);
            })
        }
    })
})
