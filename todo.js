$(document).ready(function() {
  updateCounters();

  $("input[type=checkbox]").bind('change', toggleDone);
  $("form").bind('submit', submitTodo);
  $("#clean-up").bind('click', cleanUpList);
});

function updateCounters() {
  var totalTodos = $(".todo").length;
  var completedTodos = $(".completed").length;

  $("#total-count").html(totalTodos);
  $("#completed-count").html(completedTodos);
  $("#todo-count").html(totalTodos - completedTodos);
}

function toggleDone() {
  $(this).parent().toggleClass("completed");
  updateCounters();
}

function submitTodo(event) {
  event.preventDefault();
  var title = $("#new-todo").val();

  createTodo(title);
  $("#new-todo").val(null);
  updateCounters();
}

function createTodo(title) {
  var listitem = $("<li></li>");
  listitem.addClass("todo");

  var checkbox = $("<input>");
  var checkboxId = "todo-" + nextTodoId();
  checkbox.attr("type", "checkbox");
  checkbox.attr("id", checkboxId);
  checkbox.val(1);
  checkbox.bind("change", toggleDone);

  var label = $("<label></label>");
  label.attr("for", checkboxId);
  label.html(title);

  listitem.append(checkbox);
  listitem.append(" ");
  listitem.append(label);

  $("#todolist").append(listitem);
}

function nextTodoId() {
  return $(".todo").length + 1;
}

function cleanUpList(event) {
  $.when( $(".completed").remove() )
   .then(updateCounters);
}
