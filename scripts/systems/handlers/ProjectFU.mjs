import {BaseSystem} from "../BaseSystem.mjs";
import {settings} from "../../settings.mjs";

export class ProjectFU extends BaseSystem {
  static system = 'projectfu';

  get sheetRenderHooks() {
    const {render, rendered, onChange} = super.sheetRenderHooks;

    render.ActorSheet = ".item .rollable";

    return {render, rendered, onChange};
  }

  registerSettings(settingsData) {
  }

  registerSheetListeners() {
  }

  registerOther() {
  }

  registerHooks() {
    Hooks.on("projectfu.processCheck", this.processCheck);
  }

  systemValidation(macro) {
    return true;
  }

  processCheck(check, actor, item)
  {
    // Trigger the item roll
    if (item.hasMacro())
      var protoname = actor.prototypeToken.name;
      var src = canvas.tokens.ownedTokens.find((token) => token.name == protoname);
      game.user.targets.ids.forEach((targetid) => {
        var tgt = canvas.tokens.get(targetid);
        item.executeMacro({"src":src, "tgt":tgt});
      }); 
      
      //return item.executeMacro({"src":src, "tgts":tgts});
  }

}