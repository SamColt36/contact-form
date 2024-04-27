import $ from "jquery";
import { submit } from "./dom.js";
const empty = "";

const blockSubmit = () =>
  submit
    .attr("disabled", "disabled")
    .removeClass("cursor-pointer")
    .addClass("cursor-not-allowed");

const resetForm = () => {
  $('input:not([type="submit"]):not([type="reset"])').val(empty);
  blockSubmit();
};

export { blockSubmit, resetForm, empty };
