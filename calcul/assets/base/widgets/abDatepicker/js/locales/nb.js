(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Velg dato ...",
		        "buttonLabel": "Klikk eller trykk på Enter-tasten eller mellomromstasten for å åpne kalender",
		        "prevButtonLabel": "Gå til forrige måned",
		        "nextButtonLabel": "Gå til neste måned",
		        "closeButtonTitle": "Lukk",
		        "closeButtonLabel": "Lukk kalenderen",
		        "prevMonthButtonLabel": "Gå til forrige år",
		        "prevYearButtonLabel": "Gå til forrige tjue år",
		        "nextMonthButtonLabel": "Gå til neste år",
		        "nextYearButtonLabel": "Gå til de neste tjue årene",
		        "changeMonthButtonLabel": "Klikk eller trykk på Enter-tasten eller mellomromstasten for å endre måned",
		        "changeYearButtonLabel": "Klikk eller trykk på Enter-tasten eller mellomromstasten for å endre år",
		        "changeRangeButtonLabel": "Klikk eller trykk på Enter-tasten eller mellomromstasten for å gå til de neste tjue årene",
		        "calendarHelp": "- Pil opp og pil ned - går til samme dag i uken i forrige eller neste uke hhv. Hvis slutten av måneden er nådd, fortsetter inn i neste eller forrige måned som passer.\r\n- Venstre pil og Høyre pil - avanserer en dag til den neste, også i et kontinuum. Visuelt fokus flyttes fra dag til dag og wraps fra rad til rad i rutenettet dager.\r\n- Ctrl + Page Up - Flytter til samme tidspunkt året før.\r\n- Control + Page Down - Flytter til samme dato i neste år.\r\n- Hjem - Flytter til den første dagen i den aktuelle måneden.\r\n- End - Flytter til den siste dagen i den aktuelle måneden.\r\n- Page Up - Flytter til samme dato i forrige måned.\r\n- Page Down - Flytter til samme dato i neste måned.\r\n- Enter eller Espace - lukker kalenderen, og den valgte datoen vises i den tilhørende tekstboksen.\r\n- Escape - lukker kalenderen uten handling."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "januar",
		        "februar",
		        "mars",
		        "april",
		        "mai",
		        "juni",
		        "juli",
		        "august",
		        "september",
		        "oktober",
		        "november",
		        "desember"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "feb.",
		        "mar.",
		        "apr.",
		        "mai",
		        "jun.",
		        "jul.",
		        "aug.",
		        "sep.",
		        "okt.",
		        "nov.",
		        "des."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "søndag",
		        "mandag",
		        "tirsdag",
		        "onsdag",
		        "torsdag",
		        "fredag",
		        "lørdag"
		    ],
		    "day_names_abbreviated": [
		        "søn.",
		        "man.",
		        "tir.",
		        "ons.",
		        "tor.",
		        "fre.",
		        "lør."
		    ],
		    "day_names_short": [
		        "sø.",
		        "ma.",
		        "ti.",
		        "on.",
		        "to.",
		        "fr.",
		        "lø."
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "O",
		        "T",
		        "F",
		        "L"
		    ],
		    "day_periods": {
		        "am": "a.m.",
		        "noon": "kl. 12",
		        "pm": "p.m."
		    },
		    "day_periods_abbreviated": {
		        "am": "a.m.",
		        "noon": "kl. 12",
		        "pm": "p.m."
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "12",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "1. kvartal",
		        "2. kvartal",
		        "3. kvartal",
		        "4. kvartal"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "era_names_abbreviated": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "era_names_narrow": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "full_format": "EEEE d. MMMM y",
		    "long_format": "d. MMMM y",
		    "medium_format": "d. MMM y",
		    "short_format": "dd.MM.y",
		    "firstday_of_week": 0
		};
	}
})();