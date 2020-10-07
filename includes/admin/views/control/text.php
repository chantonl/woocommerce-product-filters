<div class="control text-control control-inline-style"
     data-control-type="<?php echo esc_attr( $control_key ); ?>"
     data-option-key="<?php echo esc_attr( $option_key ); ?>">
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
        <input type="text"
               class="text control-element"
               name="<?php echo esc_attr( $option_key ) ?>"
               <?php if ( $placeholder ): ?> placeholder="<?php echo esc_attr( $placeholder ); ?>" <?php endif; ?>>
    </div>
</div>