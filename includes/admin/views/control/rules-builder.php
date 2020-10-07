<div class="control rules-builder-control control-inline-style"
     data-control-type="<?php echo esc_attr( $control_key ); ?>"
     data-option-key="<?php echo esc_attr( $option_key ) ?>">
    <div class="control-label">
        <span class="label-text">
            <?php echo $label; ?>

            <?php if ( $required ): ?>
                <abbr class="required" title="<?php echo __( 'required', 'wcpf' ); ?>">*</abbr>
            <?php endif; ?>
        </span>

        <?php if ( $control_description ): ?>
            <div class="control-description">
                <span class="text"><?php echo $control_description; ?></span>
            </div>
        <?php endif; ?>
    </div>
    <div class="control-content">

        <div class="rule-groups">

            <div class="rule-group" data-id="group_0">

                <?php if ( $title_before_fields ): ?>

                    <div class="before-rule-group-text">

                        <span class="text"><?php echo $title_before_fields; ?></span>

                    </div>

                <?php endif; ?>
                <table class="rules-table">
                    <tbody class="rules-table-body">
                        <tr class="rule-row" data-id="rule_0">
                            <td class="param">
                                <select name="<?php echo esc_attr( $option_key ) ?>[group_0][rule_0][param]" class="rule-select param-select">
                                    <?php foreach ( $use_entries as $entry_id => $entry_title ): ?>
                                        <option value="<?php echo esc_attr( $entry_id ); ?>"><?php echo $entry_title; ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </td>
                            <td class="operator">
                                <select name="<?php echo esc_attr( $option_key ) ?>[group_0][rule_0][operator]" class="rule-select operator-select">
                                    <option value="=="><?php echo __( 'is equal to', 'wcpf' ); ?></option>
                                    <option value="!="><?php echo __( 'is not equal to', 'wcpf' ); ?></option>
                                </select>
                            </td>
                            <td class="value">
                                <select name="<?php echo esc_attr( $option_key ) ?>[group_0][rule_0][value]" class="rule-select value-select"></select>
                            </td>
                            <td class="add">
                                <button class="button add-rule"><?php echo __( 'and', 'wcpf' ); ?></button>
                            </td>
                            <td class="remove">
                                <button class="button remove-rule"></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="or-text">
                <span class="text"><?php echo __( 'or', 'wcpf' ); ?></span>
            </div>

            <button class="button add-rule-group"><?php echo __( 'Add rule group', 'wcpf' ); ?></button>
        </div>

    </div>
</div>