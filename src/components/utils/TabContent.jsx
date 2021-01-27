import { useEffect } from 'react';

function TabContent({titles,info}) {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let tabsWithContent = (function () {
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
      })

      tabs[0].click();

    })();
  }, []);

  


  return(
    <div id="tabs-with-content">
      <div className="tabs is-boxed is-centered">
        <ul>
          {titles.map((title) => (
              <li key={"tab_"+title}>
                <a className="" href={"#"+title}>{title}</a>
              </li>
          ))}
        </ul>
      </div>
      <div>
        {info.map((item) => (
          <div className="tab-content" key={"content_"+item.title}>
            
            <div className="columns is-4">
              {item.steps.map((step) => (
                <div className="column" key={"element_"+step.id}>
                  <div className="block has-text-justified" >
                    <h2 className="is-4 title has-text-primary mb-0">{step.title}</h2>
                    <p className="is-6 has-text-white">{step.content}</p>
                  </div>
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