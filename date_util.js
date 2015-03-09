
/**************************************** Date Util 1.0 *****************************************
 * 	date util library, a javascript library for date and operations on date object.		*
 * 												*
 *  method summary:										*
 *  today: returns the date string represents today date.					*
 *  getDayString: return the date of given date as yyyy/mm/dd format.                           *
 *  getDateHours: get hh:mm:ss am/pm represents the given date.                                 *
 *  dayInWeek: return the string day in week for the given date string.				*
 *  tomorrow: get tomorrow date in string representation.					*
 *  nextDay: return the date object represents the next day for a given date.			*
 *  nextWeek: return a week after given date object.						*
 *  nextMonth: return a month after given date object.						*
 *  nextYear: return a year after given date object.						*
 *  dateString: return a string representation for a given date.				*
 *  Date: convert string date to date object.							*
 *  now: return string represents the date time now.						*
 *  icalrfc2445Date: return the date in rfc2445 format.						*
 *  												*
 *  												*
 *  												*
 *                                 Copyright Gamal Shaban 2010.                                 *
 *                                     gemy21ce@gmail.com                                       *
 * 												*
 ************************************************************************************************/

var date_util = {
	/**
	 * returns the date string represents today date.
	 * 
	 * @param separator
	 * @returns string date representation to today.
	 */
	today : function(separator) {
		if (!separator) {
			separator = '/';
		}
		// format yy/mm/dd
		var date = new Date();
		var todaystring = date.getFullYear()
				+ separator
				+ ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'
						+ (date.getMonth() + 1)) + separator
				+ (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
		return todaystring;
	},
	/**
	 * return the date of given date as yyyy/mm/dd format.
	 * 
	 * @param date
	 *            instance that get the the date form.
	 * @param separator
	 *            separator for dates.
	 * @return string represents given date as yyyy/mm/dd.
	 */
	getDayString : function(date, separator) {
		if (!separator) {
			separator = '/';
		}
		var todaystring = date.getFullYear()
				+ separator
				+ ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'
						+ (date.getMonth() + 1)) + separator
				+ (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
		return todaystring;
	},
	/**
	 * get hh:mm:ss am/pm represents the given date.
	 * 
	 * @param date
	 *            instance that get the the date form.
	 * @return string represents given date as hh:mm:ss am/pm format
	 */
	getDateHours : function(date) {
		var now = (date.getHours() % 12 > 9 ? date.getHours() % 12 : '0'
				+ (date.getHours() % 12))
				+ ':'
				+ (date.getMinutes() > 9 ? date.getMinutes() : '0'
						+ (date.getMinutes()))
				+ ':'
				+ (date.getSeconds() > 9 ? date.getSeconds() : '0'
						+ (date.getSeconds()))
				+ ' '
				+ (date.getHours() > 12 ? 'pm' : 'am');
		return now;
	},
	/**
	 * return the string day in week for the given date string.
	 * @param dateString
	 * @returns string day in the week.
	 */
	dayInWeek : function(dateString) {
		// format yy/mm/dd
		var weekDays = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
		var dateComponents = dateString.split("/");
		var date = new Date(dateComponents[0],
				(parseInt(dateComponents[1]) - 1), dateComponents[2]);
		return (weekDays[date.getDay()]);
	},
	/**
	 * get tomorrow date in string representation.
	 * @returns string representation for tomorrow.
	 */
	tomorrow : function() {
		// format yy/mm/dd
		var date = new Date();
		var todaystring = date.getFullYear()
				+ '/'
				+ ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'
						+ (date.getMonth() + 1))
				+ '/'
				+ ((date.getDate() + 1) > 9 ? (date.getDate() + 1) : '0'
						+ (date.getDate() + 1));
		return todaystring;
	},
	/**
	 * return the date object represents the next day for a given date.
	 * @param date
	 * @returns
	 */
	nextDay : function(date) {
		date.setTime(date.getTime() + 86400000);
		return date;
	},
	/**
	 * return a week after given date object.
	 * @param date
	 * @returns
	 */
	nextWeek : function(date) {
		date.setTime(date.getTime() + 604800000);
		return date;
	},
	/**
	 * return a month after given date object.
	 * @param date
	 * @returns
	 */
	nextMonth : function(date) {
		var nextMonth = null;
		if (date.getMonth() == 11) {
			nextMonth = new Date(date.getFullYear() + 1, 0, date.getDate());
		} else {
			nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, date
					.getDate());
		}
		return nextMonth;
	},
	/**
	 * return a year after given date object.	
	 * @param date
	 * @returns {Date}
	 */
	nextYear : function(date) {
		return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
	},
	/**
	 * return a string representation for a given date.
	 * @param date
	 * @returns {String}
	 */
	dateString : function(date) {
		// format yy/mm/dd
		var todaystring = date.getFullYear()
				+ '/'
				+ ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'
						+ (date.getMonth() + 1)) + '/'
				+ (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
		return todaystring;
	},
	/**
	 * convert string date to date object
	 * @param dateString
	 * @returns {Date} date object
	 */
	Date : function(dateString) {
		// format yy/mm/dd
		var dates = dateString.split("/");
		var date = new Date(dates[0], dates[1] - 1, dates[2]);
		return date;
	},
	/**
	 * return string represents the date time now.
	 * @returns {String}
	 */
	now : function() {
		var date = new Date();
		var now = (date.getHours() % 12 > 9 ? date.getHours() % 12 : '0'
				+ (date.getHours() % 12))
				+ ':'
				+ (date.getMinutes() > 9 ? date.getMinutes() : '0'
						+ (date.getMinutes()))
				+ ':'
				+ (date.getSeconds() > 9 ? date.getSeconds() : '0'
						+ (date.getSeconds()))
				+ ' '
				+ (date.getHours() > 12 ? 'pm' : 'am');
		return now;
	},
	/**
	 * return the date in rfc2445 format.
	 * @param date
	 * @param sep
	 * @returns {String}
	 */
	icalrfc2445Date : function(date, sep) {
		var dates = date.split(sep);
		var icaldate = "";
		for ( var i = 0; i < dates.length; i++) {
			icaldate += dates[i];
		}
		return icaldate;
	}
};