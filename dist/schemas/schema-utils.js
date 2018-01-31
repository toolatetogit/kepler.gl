'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.savePropertiesOrApplySchema = savePropertiesOrApplySchema;
exports.loadPropertiesOrApplySchema = loadPropertiesOrApplySchema;
exports.getPropertyValueFromSchema = getPropertyValueFromSchema;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively save / load value for state based on property keys,
 * if property[key] is another schema
 * Use is to get value to save
 * @param {Object} opertation - 'save' or 'load'
 * @param {Object} state - state to save
 * @param {Object} properties - properties schema
 * @returns {Object} - saved state
 */
function savePropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('save', state, properties);
}

function loadPropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('load', state, properties);
}

function getPropertyValueFromSchema(operation, state, properties) {
  return Object.keys(properties).reduce(function (accu, key) {
    var _ref;

    return (0, _extends3.default)({}, accu, key in state ? properties[key] ? // if it's another schema
    properties[key][operation] ? // call save or load
    properties[key][operation](state[key], state) : // if it's another property object
    getPropertyValueFromSchema(operation, state[key], properties[key]) : (_ref = {}, _ref[key] = state[key], _ref) : {});
  }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS11dGlscy5qcyJdLCJuYW1lcyI6WyJzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJsb2FkUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSIsInN0YXRlIiwicHJvcGVydGllcyIsIm9wZXJhdGlvbiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBU2dCQSwyQixHQUFBQSwyQjtRQUlBQywyQixHQUFBQSwyQjtRQUlBQywwQixHQUFBQSwwQjs7OztBQWpCaEI7Ozs7Ozs7OztBQVNPLFNBQVNGLDJCQUFULENBQXFDRyxLQUFyQyxFQUE0Q0MsVUFBNUMsRUFBd0Q7QUFDN0QsU0FBT0YsMkJBQTJCLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsVUFBMUMsQ0FBUDtBQUNEOztBQUVNLFNBQVNILDJCQUFULENBQXFDRSxLQUFyQyxFQUE0Q0MsVUFBNUMsRUFBd0Q7QUFDN0QsU0FBT0YsMkJBQTJCLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsVUFBMUMsQ0FBUDtBQUNEOztBQUVNLFNBQVNGLDBCQUFULENBQW9DRyxTQUFwQyxFQUErQ0YsS0FBL0MsRUFBc0RDLFVBQXRELEVBQWtFO0FBQ3ZFLFNBQU9FLE9BQU9DLElBQVAsQ0FBWUgsVUFBWixFQUF3QkksTUFBeEIsQ0FDTCxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQTs7QUFBQSxzQ0FDS0QsSUFETCxFQUVNQyxPQUFPUCxLQUFQLEdBQ0FDLFdBQVdNLEdBQVgsSUFDRTtBQUNBTixlQUFXTSxHQUFYLEVBQWdCTCxTQUFoQixJQUNFO0FBQ0FELGVBQVdNLEdBQVgsRUFBZ0JMLFNBQWhCLEVBQTJCRixNQUFNTyxHQUFOLENBQTNCLEVBQXVDUCxLQUF2QyxDQUZGLEdBR0U7QUFDQUQsK0JBQTJCRyxTQUEzQixFQUFzQ0YsTUFBTU8sR0FBTixDQUF0QyxFQUFrRE4sV0FBV00sR0FBWCxDQUFsRCxDQU5KLG9CQU9JQSxHQVBKLElBT1VQLE1BQU1PLEdBQU4sQ0FQVixPQURBLEdBU0EsRUFYTjtBQUFBLEdBREssRUFjTCxFQWRLLENBQVA7QUFnQkQiLCJmaWxlIjoic2NoZW1hLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWN1cnNpdmVseSBzYXZlIC8gbG9hZCB2YWx1ZSBmb3Igc3RhdGUgYmFzZWQgb24gcHJvcGVydHkga2V5cyxcbiAqIGlmIHByb3BlcnR5W2tleV0gaXMgYW5vdGhlciBzY2hlbWFcbiAqIFVzZSBpcyB0byBnZXQgdmFsdWUgdG8gc2F2ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wZXJ0YXRpb24gLSAnc2F2ZScgb3IgJ2xvYWQnXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBzdGF0ZSB0byBzYXZlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHByb3BlcnRpZXMgc2NoZW1hXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIHNhdmVkIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoc3RhdGUsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGdldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKCdzYXZlJywgc3RhdGUsIHByb3BlcnRpZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hKHN0YXRlLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSgnbG9hZCcsIHN0YXRlLCBwcm9wZXJ0aWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKG9wZXJhdGlvbiwgc3RhdGUsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLnJlZHVjZShcbiAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC4uLihrZXkgaW4gc3RhdGVcbiAgICAgICAgPyBwcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICA/IC8vIGlmIGl0J3MgYW5vdGhlciBzY2hlbWFcbiAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XVtvcGVyYXRpb25dXG4gICAgICAgICAgICA/IC8vIGNhbGwgc2F2ZSBvciBsb2FkXG4gICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XVtvcGVyYXRpb25dKHN0YXRlW2tleV0sIHN0YXRlKVxuICAgICAgICAgICAgOiAvLyBpZiBpdCdzIGFub3RoZXIgcHJvcGVydHkgb2JqZWN0XG4gICAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKG9wZXJhdGlvbiwgc3RhdGVba2V5XSwgcHJvcGVydGllc1trZXldKVxuICAgICAgICAgIDoge1trZXldOiBzdGF0ZVtrZXldfVxuICAgICAgICA6IHt9KVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG59XG4iXX0=