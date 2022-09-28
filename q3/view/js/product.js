$(eventHandler);

function eventHandler()
{
    $("#addToCartForm").submit(doAjax);
}

function doAjax()
{
    const data=
    {
        id: $("#id").val()  
    };   
    $.post({
        url: "/addToCart",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(success)
        .fail(failure).always(done);  
        return false;        
}

function success()
{
  console.log("Product was added to the cart successfully");
}

function failure()
{
    console.log("Couldn't add product to the cart");
}

function done()
{
    console.log("done");
}