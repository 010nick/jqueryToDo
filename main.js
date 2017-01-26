function toggleDone() {
$(this).parent().toggleClass("completed");

updateCounters();
}

$("input[type=checkbox]").bind('change', toggleDone);
