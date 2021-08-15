const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//foreach

//companies.forEach((company) => console.log(company));

//filter

// const reqAges = ages.filter((ages) => ages >= 21);
// console.log(reqAges);

//filter companies

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
// console.log(retailCompanies);

//filter 80s companies

const eightiesCompanies = companies.filter((company) => company.start < 1990);
// console.log(eightiesCompanies);

//filter the companies  lated for 10 years

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
// console.log(lastedTenYears);

//map

const companyNames = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

// console.log(companyNames);

// const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesMap);

//sort

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort ages

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

//reduce

//sum of ages

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//total years for all companies

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

// console.log(totalYears);

//All methods combined

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
