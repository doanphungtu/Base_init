import React, {useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

import {Color, Metric} from '../Theme';
import Divider from './Divider';

const MAX_HEIGHT_DR = 200;

const DropdownModal = ({
  defaultIndex = -1,
  placeholder = 'Chọn option',
  options = [],
  disabled = false,
  accessible = false,
  buttonStyle,
  textButtonStyle,
  renderItemButton,
  dropdownStyle,
  showsIndicatorDropdown = false,
  renderRow,
  dropdownTextStyle,
  onSelect,
  isFullWidth = true,
  itemDropdownStyle,
  sizeIconCheck = 18,
  sizeIconDr = 25,
  wrapStyle,
}) => {
  const [selectIndex, setSelectIndex] = useState(defaultIndex);
  const [showDropdown, setShowDropdown] = useState(false);

  let refButton = useRef(null);
  let refButtonFrame = useRef(null);

  function updatePosition(callback) {
    if (refButton.current && refButton.current.measureInWindow) {
      refButton.current.measureInWindow((px, py, width, height) => {
        refButtonFrame.current = {
          x: px,
          y: py,
          w: width,
          h: height,
        };
        callback && callback();
      });
    }
  }

  function show() {
    updatePosition(() => setShowDropdown(true));
  }

  function hide() {
    setShowDropdown(false);
  }

  const _renderButton = () => {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={Metric.variable.activeOpacity}
        accessible={accessible}
        onPress={() => {
          show();
        }}
        style={[styles.defaultButton, buttonStyle]}>
        <View style={styles.defaultViewButton}>
          {!renderItemButton ? (
            <Text
              style={[styles.defaultTextButtonStyle, textButtonStyle]}
              numberOfLines={1}>
              {selectIndex == -1 ? placeholder : options[selectIndex]}
            </Text>
          ) : (
            renderItemButton(options[selectIndex])
          )}
          <FontAwesome
            name={'angle-down'}
            size={sizeIconDr}
            color={Color.grey}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const _onRowPress = (rowData, rowID) => {
    onSelect && onSelect(rowData, rowID);
    setSelectIndex(rowID);
    hide();
  };

  const _renderItem = ({item, index}) => {
    const key = `row_${index}`;
    const isSelected = index === selectIndex;
    const value = item.toString();
    const row = !renderRow ? (
      <View style={[styles.defaultItemDropdownStyle, itemDropdownStyle]}>
        <Text
          numberOfLines={1}
          style={[styles.defaultDropdownTextStyle, dropdownTextStyle]}>
          {value}
        </Text>
        {isSelected && (
          <MaterialIcons name="check" color={Color.grey} size={sizeIconCheck} />
        )}
      </View>
    ) : (
      renderRow(item, index, isSelected)
    );

    const touchableProps = {
      key,
      accessible,
      onPress: () => _onRowPress(item, index),
    };

    return <TouchableOpacity {...touchableProps}>{row}</TouchableOpacity>;
  };

  function _onRequestClose() {
    hide();
  }

  function _calcPosition() {
    const windowWidth = Metric.size.width;
    const windowHeight = Metric.size.height;
    const dropdownHeight = Math.min(
      StyleSheet.flatten(itemDropdownStyle)?.height * options.length ||
        StyleSheet.flatten(styles.defaultItemDropdownStyle)?.height *
          options.length,
      MAX_HEIGHT_DR,
    );
    const bottomSpace =
      windowHeight - refButtonFrame.current?.y - refButtonFrame.current?.h;
    const rightSpace = windowWidth - refButtonFrame.current?.x;
    const showInBottom =
      bottomSpace >= dropdownHeight || bottomSpace >= refButtonFrame.current?.y;
    const showInLeft = rightSpace >= refButtonFrame.current?.x;
    const positionStyle = {
      height: dropdownHeight,
      top: showInBottom
        ? refButtonFrame.current?.y + refButtonFrame.current?.h
        : Math.max(0, refButtonFrame.current?.y - dropdownHeight),
    };
    if (showInLeft) {
      positionStyle.left = refButtonFrame.current?.x;
      if (isFullWidth) {
        positionStyle.right = rightSpace - refButtonFrame.current.w;
      }
    } else {
      const dropdownWidth =
        (dropdownStyle && StyleSheet.flatten(dropdownStyle).width) ||
        (buttonStyle && StyleSheet.flatten(buttonStyle).width) ||
        -1;

      if (dropdownWidth !== -1) {
        positionStyle.width = dropdownWidth;
      }

      positionStyle.right = rightSpace - refButtonFrame.current?.w;
    }

    return positionStyle;
  }

  const _renderDropdown = () => {
    return (
      <FlatList
        data={options}
        style={styles.list}
        keyExtractor={(item, i) => `key-${i}`}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <Divider />}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={showsIndicatorDropdown}
        keyboardShouldPersistTaps={'never'}
      />
    );
  };

  const _renderModal = () => {
    const frameStyle = _calcPosition();
    if (showDropdown && refButtonFrame)
      return (
        <Modal
          animationType={'fade'}
          visible
          transparent
          onRequestClose={_onRequestClose}
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]}>
          <TouchableWithoutFeedback
            accessible={accessible}
            disabled={!showDropdown}
            onPress={() => hide()}>
            <View style={styles.modal}>
              <View style={[styles.dropdown, dropdownStyle, frameStyle]}>
                {_renderDropdown()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
  };

  return (
    <View style={wrapStyle} ref={refButton} collapsable={false}>
      {_renderButton()}
      {_renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultViewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  defaultTextButtonStyle: {
    fontSize: 14,
    color: Color.grey,
    flex: 1,
  },
  modal: {
    flexGrow: 1,
  },
  dropdown: {
    position: 'absolute',
    height: 'auto',
    maxHeight: MAX_HEIGHT_DR,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.halfGrey,
    borderRadius: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  list: {
    flexGrow: 1,
  },
  defaultDropdownTextStyle: {
    fontSize: 15,
    color: Color.grey,
    textAlignVertical: 'center',
    flex: 1,
  },
  defaultItemDropdownStyle: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});

export default DropdownModal;
