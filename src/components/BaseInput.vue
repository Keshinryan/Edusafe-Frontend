<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        class="form-control"
        :accept="accept"
        :value="internalValue"
        @input="onInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: [String, File],
      type: {
        type: String,
        default: "text",
      },
      id: String,
      name: String,
      label: String,
      placeholder: String,
      accept: String,
    },
    computed: {
      internalValue() {
        return this.modelValue;
      },
    },
    methods: {
      onInput(event) {
        const value = this.type === "file" ? event.target.files[0] : event.target.value;
        this.$emit("update:modelValue", value);
      },
    },
  };
  </script>
  