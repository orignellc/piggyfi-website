export function DashboardCaseStudy() {
  return (
    <div className="relative" id="case-studies">
      <div className="py-14 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            Case Study
          </h2>
        </div>

        <div className="max-w-6xl px-4 mx-auto">
          <div className="w-full md:mx-auto bg-purple-deep rounded-2xl px-9 py-5 md:py-11">
            <div className="max-w-3xl w-full mx-auto text-xl md:text-2xl text-white leading-normal">
              <table className="mb-11 w-full md:w-2/3">
                <tbody>
                  <tr>
                    <td className="py-2">Country:</td>
                    <td className="py-2">
                      Nigeria
                      <img
                        src="/images/nigeria.png"
                        alt="Nigeria"
                        className="inline h-6 ml-2"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Inflation rate:</td>
                    <td className="py-2">
                      <a href="https://www.cbn.gov.ng/rates/inflrates.asp">
                        17.75% &#8599;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Population:</td>
                    <td className="py-2">
                      <a href="https://data.worldbank.org/indicator/SP.POP.TOTL?locations=NG">
                        &gt; 206 Million&#8599;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Minimum wage:</td>
                    <td className="py-2">
                      <a href="https://www.statista.com/statistics/1119133/monthly-minimum-wage-in-nigeria/">
                        77 USD&#8599;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">GDP per capita:</td>
                    <td className="py-2">
                      <a href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=NG">
                        2,097 USD&#8599;
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mb-11">
                According to 2021 sources, in the past 12 months, the Nigerian
                naira has devalued from ₦361 per dollar to ₦413 per dollar on
                the international market, and as high as ₦565 as of Oct 23,
                2021, on the black market.
              </p>

              <p className="mb-11">
                Let’s take a fixed income earner on a minimum wage of ₦30,000
                (&lt; 77$), saving 10% of his/her salary ₦3,000(&lt; 7.7$)
                monthly between Oct 23, 2020 - Aug 23, 2021.
              </p>

              <p className="mb-11">
                By the end of the savings period, she would have successfully
                saved ₦30,000, which by now is worth less than it used to be due
                to the continuous rising inflation rate.
              </p>

              <p className="mb-11">
                By Aug 23, 2021. The savings value in USD is no more worth about
                77$ but instead is only worth approximately $63.91.
              </p>

              <p className="mb-11">
                The difference is a whopping $14. Which when converted back to
                naira, is equal to the person losing Two months savings, when
                converted back to naira.
              </p>

              <p className="mb-11">
                If there were to be an easy, cheap, and very accessible means
                for the savings to be in USD which is a more stable currency
                than the Nigerian naira, Such loss would have been prevented.
              </p>

              <p className="">
                In the above case study, it may not seem like much was lost, but
                if you apply the figure to a larger number the difference would
                surprise you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
