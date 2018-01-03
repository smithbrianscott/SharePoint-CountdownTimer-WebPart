import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown
} from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./CountdownTimerWebPart.module.scss";
import * as strings from "CountdownTimerWebPartStrings";

export interface ICountdownTimerWebPartProps {
  description: string;
  eventdate: string;
}

export default class CountdownTimerWebPart extends BaseClientSideWebPart<ICountdownTimerWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.countdownTimer }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("eventdate", {
                  label: "Event Date"
                }),
                PropertyPaneTextField("description", {
                  label: "Event Description"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
