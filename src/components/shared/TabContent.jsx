import { useEffect } from 'react';

function TabContent({ titles, info }) {
  useEffect(() => {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');

    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };

    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };

    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };

    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    });

    tabs[0].click();
  }, []);

  return (
    <div id="tabs-with-content">
      <div className="tabs is-centered">
        <ul className="has-background-white">
          {titles.map((title) => (
            <li key={'tab_' + title}>
              <a className="is-size-5" href={'#' + title}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {info.map((item) => (
          <div className="tab-content" key={'content_' + item.title}>
            <div className="columns is-8 is-multiline is-centered pb-6 is-4">
              {item.steps.map((step) => (
                <div
                  className="column is-4-fullhd is-4-widescreen is-4-desktop is-12-tablet"
                  key={'element_' + step.id}
                >
                  <h2 className="is-size-4-widescreen is-size-5-desktop is-size-5-tablet is-size-5-mobile has-text-info mb-0">
                    <i className={'fa fa-' + step.icon + ' fa-lg'}></i> {step.title}
                  </h2>
                  <p className="is-6 has-text-dark">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabContent;
