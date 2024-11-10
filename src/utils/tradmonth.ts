export function tradMonth() {
  const monthElements = document.querySelectorAll('.is-month');
  const monthTranslations: { [key: string]: string } = {
    January: 'Janvier',
    February: 'Février',
    March: 'Mars',
    April: 'Avril',
    May: 'Mai',
    June: 'Juin',
    July: 'Juillet',
    August: 'Août',
    September: 'Septembre',
    October: 'Octobre',
    November: 'Novembre',
    December: 'Décembre',
  };

  monthElements.forEach((element) => {
    const monthText = element.textContent ? element.textContent.trim() : null;
    if (monthText && monthTranslations[monthText]) {
      element.textContent = monthTranslations[monthText];
    }
  });
}
