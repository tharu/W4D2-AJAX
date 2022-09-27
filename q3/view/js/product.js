$(eventHandler);

function eventHandler()
{
    $("#addtoCart").click(doAjax);
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
        console.log("end of post");
}

function success()
{

}

function failure()
{

}

function done()
{

}