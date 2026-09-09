# Winona / NCPDD Working Data Set — Variables, Values, Citations

Compiled 8 September 2026. Corrected 9 September 2026 where a live source disagreed. This is a data reference, not a legal filing.

Three corrections from the draft that was supplied:

1. Bank of Winona UEI is CMBTY4NJGAF5, not C5KHDCJADYR4. C5KHDCJADYR4 is Bancorp of Winona, Inc. NH8PJNZMKPS8 is NCPDD. Those three IDs are not interchangeable.
2. North Carrollton confirmed-in-window total is $808,378. Do not use $1,595,000. That figure folds in $15,000 of Town cash and rounds DRA off $162,378. If window-edge sewer lines are counted, published Town awards are $1,580,378.
3. 2021 Bank of Winona BEA $170,699 belongs in the award table. Without it the 2016-2024 sum is incomplete.

---

## 1. Bank of Winona — Entity Identifiers

| Variable | Value | Source |
|---|---|---|
| bank_legal_name | Bank of Winona | FDIC BankFind Cert 12207; bankofwinona.com |
| bank_address | 312 N Applegate St, Winona, MS 38967 | FDIC BankFind; bank contact page |
| bank_fdic_cert | 12207 | FDIC BankFind |
| bank_rssd | 800442 | FDIC BankFind FRB ID |
| bank_holding_rssd | 3229503 | FDIC BankFind RSSDHCR |
| bank_established | 15 June 1885 | FDIC BankFind |
| bank_charter_type | State chartered, Fed member | FDIC BankFind |
| bank_tax_status | Subchapter S | SAM entity page; call-report profile |
| bank_primary_regulator | Federal Reserve Board | FDIC BankFind |
| bank_holding_company | Bancorp of Winona, Inc. | FDIC BankFind; SAM |
| bank_uei | CMBTY4NJGAF5 | SAM / OpenGovUS; USAspending FAIN 241BE066264-G |
| holding_company_uei | C5KHDCJADYR4 | SAM / OpenGovUS Bancorp of Winona, Inc. |
| bank_cdfi_certified | Yes | cdbanks.org/bank-winona |
| holding_company_started | 6 November 2003 | SAM Bancorp page |

NCPDD UEI NH8PJNZMKPS8 is not a bank ID and is not a holding-company ID.

---

## 2. Bank of Winona — CDFI Fund Award History

| Year | Program | Awardee | Amount | Official source |
|---|---|---|---|---|
| 2016 | BEA | Bank of Winona | $227,282 | 2016 BEA Award Book |
| 2017 | BEA | Bank of Winona | $51,537 | 2017 BEA Award Book |
| 2018 | BEA | Bank of Winona | $233,244 | Profile 181BE023356 |
| 2019 | BEA | Bank of Winona | $245,547 | 2019 BEA Award Book |
| 2020 | BEA | Bank of Winona | $202,898 | Profile 201BE023634 |
| 2021 | BEA | Bank of Winona | $170,699 | 2021 BEA Award Book |
| 2021 | CDFI-RRP | Bank of Winona | $1,826,265 | Profile 21RRP056744 |
| 2021 | CDFI-FA | Bancorp of Winona, Inc. | $401,530 | Profile 211FA057317 |
| 2022 | CDFI-ERP | Bank of Winona | $2,478,839 | Profile 22ERP060878 |
| 2023 | BEA | Bank of Winona | $437,350 | Profile 231BE063507 |
| 2024 | BEA | Bank of Winona | $280,369 | 2024 BEA Award Book; USAspending 241BE066264-G |

award_total_2016_2024 including 2021 BEA = $6,555,560.

That sum is an arithmetic total of the rows above. It is not a single CDFI Fund export.

---

## 3. NCPDD — Entity Identifiers and 990 snapshot

| Variable | Value | Source |
|---|---|---|
| ncpdd_legal_name | North Central Planning and Development District, Inc. | Form 990; ncpdd.org |
| ncpdd_address | 28 Industrial Park Blvd, Winona, MS 38967 | ncpdd.org |
| ncpdd_ein | 64-0473694 | ProPublica Nonprofit Explorer |
| ncpdd_uei | NH8PJNZMKPS8 | SAM |
| ncpdd_phone | 662-283-2675 | ncpdd.org |
| ncpdd_director | Christopher Weathers, Executive Director | DRA LDD page; 990 |
| ncpdd_counties_served | Attala, Carroll, Grenada, Holmes, Leflore, Montgomery, Yalobusha | ncpdd.org |
| ncpdd_formation_year_990 | 1971 (Form 990 / Cause IQ) | Cause IQ |
| ncpdd_formation_year_directory | 1969 (2026 MAPDD directory) | Unresolved discrepancy |
| fy2024_revenue | $6,787,166 | ProPublica / Cause IQ |
| fy2024_expenses | $6,613,695 | ProPublica / Cause IQ |
| fy2024_contributions | $6,593,743 | Cause IQ |
| fy2024_assets_as_filed | $16,021,630 | Cause IQ |

FY2025 audit restatement, revolving-loan restricted funds, and pledged-collateral dollars from FAC 0000403876 were in the supplied data set and were not re-opened live on 9 September 2026. They are not copied here as confirmed.

### Form 990 grants paid, named on public extracts

| Year | Line 13 total | Named on extract | Named sum | Unnamed gap |
|---|---|---|---|---|
| FY2024 | $109,598 | Grenada $8,625; First Choice Home Care LLC $86,661; N. MS Rural Legal Service $13,462 | $108,748 | $850 |
| FY2023 | $225,378 | Grenada $8,730; First Choice Home Care LLC $200,857 | $209,587 | $15,791 |
| FY2022 | $310,728 | Grenada $9,458; Itta Bena $6,264 on one extract | $15,722 | $295,006 unnamed on that extract |
| FY2021 | $355,595 | Aggregator total only | — | Full Schedule I not opened line by line |
| FY2020 | $286,800 | Aggregator total only | — | Full Schedule I not opened line by line |

FY2024 named three match Intellispect. No extract reviewed names North Carrollton or Carrollton as a 990 grantee.

---

## 4. Town of North Carrollton — Mayor Ken Strachan

| Item | Amount | Year | Status |
|---|---|---|---|
| DRA SEDAP, George and Morgan | $162,378 | Dec 2025 | Confirmed, 11 Dec statewide list |
| FEMA Public Assistance streets | $289,000 | Dec 2025 | Confirmed |
| TAP, Big Sand Creek recreation | $357,000 | 2022 | Confirmed |
| CDBG sewer | $449,000 | 2020-21 | Published on mayor page; window edge |
| FEMA sewer | $323,000 | 2020-21 | Published on mayor page; window edge |
| Town cash, Cemetery/Jefferson overlay | $15,000 | 2025 | Town spending, not a grant |
| CDBG sewer request | $600,000 | May 2024 | Not on 18 May 2026 award list |
| HOME application | filing only | July 2024 | Hearing held; not an award |

north_carrollton_confirmed_in_window = $808,378.
north_carrollton_published_if_window_edge_counted = $1,580,378.
Do not use $1,595,000.

---

## 5. Town of Carrollton — Mayor Pamela Lee

| Item | Amount | Year | Status |
|---|---|---|---|
| USDA federal funds | $40,816.96 | FY2023 | State Auditor compilation |
| USDA federal funds | $29,898.80 | FY2024 | State Auditor compilation |
| General municipal aid | $211.43 | FY2024 | State aid, not a grant |
| Homestead exemption reimbursement | $7,357.73 | FY2024 | State aid, not a grant |
| Cotesworth renovations | about $100,000 | Sept 2025 | Historic-site grant, not confirmed as Town award |

carrollton_confirmed_federal = $70,715.76.
Do not add state aid into that federal total.

---

## 6. Overlap facts (verified, non-causal)

| Variable | Value |
|---|---|
| shared_city | Winona, Montgomery County, MS |
| shared_district_map | NCPDD seven-county map includes Montgomery (bank) and Carroll (the two towns) |
| utility_overlap_person | Tim McBride, bank director; District Manager, Delta Electric Power Association |
| utility_overlap_town | Delta Electric is North Carrollton's electric provider |
| published_merge_found | None as of 8 September 2026 |

Bank-depository pledged-collateral figures from the supplied FAC extract were not re-opened live and are not copied here as confirmed.

---

## Official URLs used 8-9 September 2026

- FDIC BankFind Cert 12207
- SAM / OpenGovUS CMBTY4NJGAF5 (bank) and C5KHDCJADYR4 (holding company)
- USAspending FAIN 241BE066264-G
- CDFI Fund award books 2016, 2017, 2019, 2021, 2024 and awardee profiles 181BE023356, 201BE023634, 21RRP056744, 211FA057317, 22ERP060878, 231BE063507
- ProPublica / Cause IQ / Intellispect EIN 64-0473694
- DRA SEDAP 8 Dec 2025; Governor Reeves CDBG list 18 May 2026
- Delta News TV 16 Feb 2022, 25 July 2024, 23 Dec 2025
