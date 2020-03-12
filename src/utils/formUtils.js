class FormUtils {
  static flattenFormObjects(form) {
    const flattened = {};
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'object' && form[key] !== null) {
        Object.assign(flattened, this.flattenFormObjects(form[key]));
      } else {
        Object.assign(flattened, form);
      }
    });
    return flattened;
  }
}

module.exports = FormUtils;
