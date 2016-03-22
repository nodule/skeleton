module.exports = {
  name: "boolean",
  ns: "skeleton",
  description: "Boolean",
  phrases: {
    active: "Creating boolean value {input.boolean}"
  },
  ports: {
    input: {
      "boolean": {
        title: "Boolean",
        type: "boolean",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "boolean"
      }
    }
  },
  fn: function _boolean(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.get('boolean')
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}