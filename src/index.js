const axios = require('axios').default;

function errorCode(error) {
  switch (error.response.status) {
    case 401:
      throw new Error('API key invalid');
    case 451:
      throw new Error('Unavailable for legal reasons');
    case 404:
      throw new Error('Not found');
    case 429:
      throw new Error('Rate limited');
    case 503:
      throw new Error('Tracker Network: Service Unavailable');
    case 400:
      throw new Error('Bad request');
  }
}

/**
 * @typedef {Object} UserData
 * @property {Object} data Object containing data
 */
//
class Tracker {
  #key;
  constructor(TRN_KEY) {
    if (!TRN_KEY || typeof TRN_KEY !== 'string')
      throw new Error('Must provide a valid Trackernetwork API key');
    this.#key = TRN_KEY;
  }

  /**
   * @description Stats for the requested Division 2 player.
   * @param {string} platform The platform slug, must be one of 'uplay', 'psn', 'xbl'.
   * @param {string} platformUserId The user's handle on the platform, ie. a Uplay username, PSN ID, Xbox Live gamertag, etc.
   * @returns {UserData} Object containing user data
   */
  async getDiv2Data(platform, platformUserId) {
    var response = await axios
      .get(
        `https://public-api.tracker.gg/v2/division-2/standard/profile/${platform}/${platformUserId}`,
        {
          headers: {
            'TRN-Api-Key': this.#key,
          },
        }
      )
      .catch(err => {
        console.log('Error trying to receive Div2 Data. See below\n', err);
        return errorCode(err);
      });

    const {
      data: {
        data: { platformInfo, userInfo, metadata, segments },
      },
    } = response;
    return {
      data: {
        platformInfo,
        userInfo,
        metadata,
        segments,
      },
    };
  }

  /**
   * @description Stats for the requested Apex player.
   * @param {string} platform The platform slug, one of: 'origin', 'xbl', 'psn'
   * @param {string} platformUserId The user's handle on the platform, ie. an Origin ID, Xbox Live gamertag, PSN ID, etc.
   * @returns {UserData} Object containing user data
   */
  async getApexData(platform, platformUserId) {
    var response = await axios
      .get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserId}`, {
        headers: {
          'TRN-Api-Key': this.#key,
        },
      })
      .catch(err => {
        console.log('Error trying to receive Apex Data. See below\n', err);
        return errorCode(err);
      });

    const {
      data: {
        data: { platformInfo, userInfo, metadata, segments },
      },
    } = response;
    return {
      data: {
        platformInfo,
        userInfo,
        metadata,
        segments,
      },
    };
  }

  /**
   * @description Stats for the requested CSGO player.
   * @param {string} platform The platform slug, must be 'steam'.
   * @param {string} platformUserId The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc.
   * @returns {UserData} Object containing user data
   */
  async getCSGOData(platform, platformUserId) {
    var response = await axios
      .get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserId}`, {
        headers: {
          'TRN-Api-Key': this.#key,
        },
      })
      .catch(err => {
        console.log('Error trying to receive CSGO Data. See below\n', err);
        return errorCode(err);
      });

    const {
      data: {
        data: { platformInfo, userInfo, metadata, segments },
      },
    } = response;
    return {
      data: {
        platformInfo,
        userInfo,
        metadata,
        segments,
      },
    };
  }

  /**
   * @description Stats for the requested Splitgate player.
   * @param {string} platform The platform slug, must be 'steam', 'xbl' or 'psn'.
   * @param {string} platformUserId The user's SteamID64, Xbox Gamertag, or PSN Id
   * @returns {USerData} Object containing user data
   */
  async getSplitgateData(platform, platformUserId) {
    var response = await axios
      .get(
        `https://public-api.tracker.gg/v2/splitgate/standard/profile/${platform}/${platformUserId}`,
        {
          headers: {
            'TRN-Api-Key': this.#key,
          },
        }
      )
      .catch(err => {
        console.log('Error trying to receive Splitgate Data. See below\n', err);
        return errorCode(err);
      });

    const {
      data: {
        data: { platformInfo, userInfo, metadata, segments },
      },
    } = response;
    return {
      data: {
        platformInfo,
        userInfo,
        metadata,
        segments,
      },
    };
  }

  /**
   * @description Stats for the requested Hyper Scape player.
   * @param {string} platform The platform slug, must be one of 'uplay', 'psn', 'xbl'.
   * @param {string} platformUserId The user's handle on the platform, ie. a Uplay username, PSN ID, Xbox Live gamertag, etc.
   * @returns {UserData} Object containing user data
   */
  async getHyperscapeData(platform, platformUserId) {
    var response = await axios
      .get(
        `https://public-api.tracker.gg/v2/hyper-scape/standard/profile/${platform}/${platformUserId}`,
        {
          headers: {
            'TRN-Api-Key': this.#key,
          },
        }
      )
      .catch(err => {
        console.log('Error trying to receive Hyperscape Data. See below\n', err);
        return errorCode(err);
      });

    const {
      data: {
        data: { platformInfo, userInfo, metadata, segments },
      },
    } = response;
    return {
      data: {
        platformInfo,
        userInfo,
        metadata,
        segments,
      },
    };
  }
}

module.exports = Tracker;
