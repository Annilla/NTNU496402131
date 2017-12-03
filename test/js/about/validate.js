// JavaScript Document
$(function(){
	//須與form表單ID名稱相同
	$("#contact").validate();
	jQuery.extend(jQuery.validator.messages, {
		required: "此欄位不能為空白",
		email: "請輸入有效的 email 地址"
		});
});