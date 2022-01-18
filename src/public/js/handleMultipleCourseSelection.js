let checkAllCourses = $('#checkAll')
let courseItemCheckbox = $('input[name="courseIds[]"]')
let actionHandleButton = $('#handleMultipleCourses')
let actionOption = $('#select-action')


//Checked select All course
checkAllCourses.change(function() {
    courseItemCheckbox.prop('checked', $(this).prop('checked'))
    allowHandleCourseButton()
})

//Course Item checkbox changed
courseItemCheckbox.change(function() {
    let isCheckAll = courseItemCheckbox.length === $('input[name="courseIds[]"]:checked').length
    $('#checkAll').prop('checked', isCheckAll)
    allowHandleCourseButton()
})

//Select action changed
actionOption.change(function() {
    allowHandleCourseButton()
})

//Allow delete course item
function allowHandleCourseButton() {
    let optionActionValue = actionOption.val()
    let isAllowHandleAction = ($('input[name="courseIds[]"]:checked').length > 0 && optionActionValue !== 'empty')
    actionHandleButton.prop('disabled', !isAllowHandleAction)
}

