function changeTheme() {
    var selectedId = $('input[name="theme"]:checked').attr('id');
    $("input[type=radio][" + selectedId + "]").prop("disabled", true);
    if (localStorage) localStorage.setItem("darkmode", $("#darkmode").is(":checked"));
}

$(function() {
    if (localStorage) {
        $("#dark").prop("checked", localStorage.getItem("darkmode")!=="false");
    };
});